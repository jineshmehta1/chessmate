import { NextResponse } from "next/server";

export function middleware(req) {
  const ua = req.headers.get("user-agent") || "";

  if (ua.includes("meta-externalagent")) {
    return new Response("Blocked", { status: 403 });
  }

  return NextResponse.next();
}