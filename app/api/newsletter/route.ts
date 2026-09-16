import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email(),
});

const subscribersPath = path.join(
  process.cwd(),
  "data",
  "newsletter-subscribers.json"
);

async function readSubscribers(): Promise<string[]> {
  try {
    const file = await fs.readFile(subscribersPath, "utf8");
    return JSON.parse(file) as string[];
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: string[]) {
  await fs.mkdir(path.dirname(subscribersPath), { recursive: true });
  await fs.writeFile(subscribersPath, JSON.stringify(subscribers, null, 2), "utf8");
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parseResult = emailSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const email = parseResult.data.email.toLowerCase().trim();
  const subscribers = await readSubscribers();

  if (subscribers.includes(email)) {
    return NextResponse.json(
      { error: "This email is already subscribed." },
      { status: 409 }
    );
  }

  subscribers.push(email);
  await writeSubscribers(subscribers);

  return NextResponse.json({ success: true, email });
}
