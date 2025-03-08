import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Phone validation regex (accepts formats like +1 123-456-7890, (123) 456-7890, 123.456.7890)
const PHONE_REGEX = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone } = body;
    
    const errors: Record<string, string> = {};
    
    // Validate email (required)
    if (!email) {
      errors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Invalid email format';
    }
    
    // Validate phone (optional)
    if (phone && !PHONE_REGEX.test(phone)) {
      errors.phone = 'Invalid phone number';
    }
    
    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Validation error',
          errors
        },
        { status: 400 }
      );
    }
    
    // Simulate successful submission
    return NextResponse.json(
      {
        status: 'success',
        message: 'Form submitted successfully.'
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle server errors
    return NextResponse.json(
      {
        status: 'error',
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}