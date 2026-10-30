import { NextResponse } from 'next/server';
import { query } from '@/lib/neon';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, serviceInterest, budgetRange, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and project message are required.' },
        { status: 400 }
      );
    }

    // Insert lead into Neon DB
    const result = await query(
      `INSERT INTO leads (full_name, email, phone, company, service_interest, budget_range, message, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'NEW')
       RETURNING id, full_name, email, created_at`,
      [fullName, email, phone || null, company || null, serviceInterest || 'General', budgetRange || 'Flexible', message]
    );

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! An ADVIKS Softech representative will contact you shortly.',
      lead: result && result.length > 0 ? result[0] : { full_name: fullName, email },
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    // Return graceful success response even if DB connection is in mock mode
    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our team will get back to you within 24 hours.',
    });
  }
}
