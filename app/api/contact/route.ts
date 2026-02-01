import { NextRequest, NextResponse } from 'next/server';
import { GoogleSheetsService } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, message, source } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (Indian phone number)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/[^\d]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Store lead in Google Sheets
    try {
      const sheets = new GoogleSheetsService();
      await sheets.addLead({
        name,
        email,
        phone: cleanPhone,
        businessType,
        message: message || '',
        source: source || 'website',
      });
    } catch (error) {
      console.error('Google Sheets error:', error);
      // Continue even if Google Sheets fails
    }

    // TODO: Send email notification to admin
    // TODO: Send WhatsApp notification to admin
    // TODO: Send confirmation email to user

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will contact you within 30 minutes.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
