import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // In production, you would:
  // 1. Store the request in a database
  // 2. Send notification email to yourself
  // 3. Maybe integrate with Calendly or similar

  const timestamp = new Date().toISOString();
  const userAgent = request.headers.get('user-agent') || 'Unknown';

  // Log the request (in production, save to database)
  console.log('Call request received:', {
    timestamp,
    userAgent,
  });

  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 500));

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
