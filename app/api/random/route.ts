import { NextResponse } from 'next/server';
import { getRandomQrCode } from '@/app/lib/db';

export async function GET() {
  try {
    const randomQrCode = await getRandomQrCode();
    return NextResponse.json(randomQrCode);
  } catch (error) {
    console.error('Error getting random QR code:', error);
    return NextResponse.json(
      { error: 'Failed to get random QR code' },
      { status: 500 }
    );
  }
} 