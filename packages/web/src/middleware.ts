import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

export async function middleware() {
  const response = NextResponse.next();
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      console.log('hihihi 1s');
      resolve();
    }, 1000)
  );

  const randomString = crypto.randomBytes(16).toString('hex');
  response.headers.set('x-random-string', randomString);

  return response;
}

export const config = {
  runtime: 'nodejs',
};
