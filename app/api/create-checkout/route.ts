import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch("https://live.dodopayments.com/checkout-sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DODO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_cart: [
          {
            product_id: process.env.DODO_PRODUCT_ID,
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/scan`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Dodo error:", JSON.stringify(data));
      return NextResponse.json({ error: JSON.stringify(data)" }, { status: 500 });
    }

    // Dodo returns checkout_url (not url)
    return NextResponse.json({ url: data.checkout_url });
  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}