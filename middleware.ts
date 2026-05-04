import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const secret = request.headers.get('x-secret-key')

  if (secret !== 'mysupersecret123') {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return NextResponse.next()
}