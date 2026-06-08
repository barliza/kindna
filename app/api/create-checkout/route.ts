import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();

    const response = await fetch("https://api.dodopayments.com/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DODO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: process.env.DODO_PRODUCT_ID,
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?plan=${plan}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/scan`,
        quantity: 1,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Dodo error:", data);
      return NextResponse.json({ error: data.message || "Payment failed" }, { status: 500 });
    }

    return NextResponse.json({ url: data.url });
  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}