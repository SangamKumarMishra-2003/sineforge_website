import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const analyticsSchema = z.object({
  event: z.string().min(1),
  payload: z.record(z.any()).optional(),
  timestamp: z.string().optional(),
});

const eventsPath = path.join(
  process.cwd(),
  "data",
  "analytics-events.json"
);

async function readEvents(): Promise<Array<Record<string, unknown>>> {
  try {
    const file = await fs.readFile(eventsPath, "utf8");
    return JSON.parse(file) as Array<Record<string, unknown>>;
  } catch {
    return [];
  }
}

async function writeEvents(events: Array<Record<string, unknown>>) {
  await fs.mkdir(path.dirname(eventsPath), { recursive: true });
  await fs.writeFile(eventsPath, JSON.stringify(events, null, 2), "utf8");
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parseResult = analyticsSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: "Invalid analytics payload." },
      { status: 400 }
    );
  }

  const eventRecord = {
    ...parseResult.data,
    timestamp: parseResult.data.timestamp ?? new Date().toISOString(),
  };

  const events = await readEvents();
  events.push(eventRecord);
  await writeEvents(events);

  return NextResponse.json({ success: true });
}
