import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // This endpoint will be activated when marketplace feature is ready
  // For now, return a placeholder response

  return NextResponse.json({
    message: 'Marketplace API coming soon',
    plans: []
  });
}

// When ready to activate, copy the marketplace logic from the old server.js
// and adapt it to use Next.js API route format
