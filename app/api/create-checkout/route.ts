import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();
    const isMonthly = plan === "monthly";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: isMonthly ? "subscription" : "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: isMonthly ? "KinDNA Unlimited" : "KinDNA Full Report",
              description: isMonthly
                ? "Unlimited scans — all 12 features every time"
                : "Unlock all 12 features — complete DNA resemblance report",
            },
            unit_amount: isMonthly ? 499 : 299,
            ...(isMonthly ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/scan`,
      metadata: { plan },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}