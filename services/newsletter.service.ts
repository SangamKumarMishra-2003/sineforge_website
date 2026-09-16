export interface AnalyticsEvent {
  event: string;
  payload?: Record<string, unknown>;
}

export async function subscribeToNewsletter(email: string) {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(
      (data && (data.error as string)) || "Failed to subscribe to the newsletter."
    );
  }

  return response.json();
}

export async function trackAnalyticsEvent(event: AnalyticsEvent) {
  await fetch("/api/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event: event.event,
      payload: event.payload ?? {},
      timestamp: new Date().toISOString(),
    }),
  });
}
