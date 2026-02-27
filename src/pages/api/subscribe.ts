// Server-side API endpoint — handles newsletter and waitlist subscriptions via Resend
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  let body: { email?: string; type?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ message: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { email, type } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ message: 'A valid email address is required' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[subscribe] RESEND_API_KEY is not configured');
    return new Response(JSON.stringify({ message: 'Service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const audienceId =
    type === 'waitlist'
      ? import.meta.env.RESEND_WAITLIST_AUDIENCE_ID
      : import.meta.env.RESEND_NEWSLETTER_AUDIENCE_ID;

  if (!audienceId) {
    console.error(`[subscribe] Audience ID not configured for type: ${type}`);
    return new Response(JSON.stringify({ message: 'Service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      console.error('[subscribe] Resend API error:', error);
      return new Response(JSON.stringify({ message: 'Failed to subscribe. Please try again.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Subscribed successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[subscribe] Unexpected error:', err);
    return new Response(JSON.stringify({ message: 'An unexpected error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
