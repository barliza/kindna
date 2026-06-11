import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return NextResponse.json({ 
    url: "https://checkout.dodopayments.com/buy/pdt_0NgcfaCNwsBDoQj0qCdmR?quantity=1&redirect_url=https://kindna.app/success" 
  });
}