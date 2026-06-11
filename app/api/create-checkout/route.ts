import { NextRequest, NextResponse } from "next/server";
import DodoPayments from "dodopayments";

const client = new DodoPayments({
  bearerToken: process.env.DODO_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const session = await client.checkoutSessions.create({
      product_cart: [{ product_id: process.env.DODO_PRODUCT_ID!, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/scan`,
    });

    return NextResponse.json({ url: session.checkout_url });
  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}