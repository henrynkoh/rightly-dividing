import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'API is working' });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({ 
      status: 'ok', 
      message: 'POST API is working',
      received: data
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'error', 
      message: 'Failed to parse JSON body' 
    }, { status: 400 });
  }
} 