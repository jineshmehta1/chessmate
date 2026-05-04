import { NextResponse } from "next/server";

const BLOCKED_BOTS = [
  "meta-externalagent",
  "petalbot",
  "oai-searchbot",
  "facebookexternalhit",
  "chatgpt-user",
  "gptbot",
  "ahrefsbot",
  "claudebot",
  "amazonbot",
  "bytespider",
  "anthropic-ai",
  "cohere-ai",
  "perplexitybot",
  "yandexbot"
];

export function middleware(req) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  const isBlocked = BLOCKED_BOTS.some((bot) => ua.includes(bot));

  if (isBlocked) {
    return new Response("Forbidden: Bot Access Denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes except standard static assets and API routes if needed,
  // this drastically reduces Vercel Edge Request costs.
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};