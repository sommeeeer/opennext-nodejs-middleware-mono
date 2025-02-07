import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

export function middleware() {
  const response = NextResponse.next();

  const randomString = crypto.randomBytes(16).toString('hex');
  response.headers.set('x-random-string', randomString);

  return response;
}

export const config = {
  runtime: 'nodejs',
};
