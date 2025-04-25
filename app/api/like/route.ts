import { NextResponse } from 'next/server';
import { getOrCreateQrCode, incrementQrCodeScore } from '@/app/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { qrcode_txt, id } = body;

    if (!qrcode_txt && !id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let result;

    // If id is provided, increment the score
    if (id) {
      result = await incrementQrCodeScore(id);
    } 
    // Otherwise, get or create a record for the text
    else if (qrcode_txt) {
      result = await getOrCreateQrCode(qrcode_txt);
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in like API:', error);
    return NextResponse.json(
      { error: 'Failed to process like request' },
      { status: 500 }
    );
  }
} 