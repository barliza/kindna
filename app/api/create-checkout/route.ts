import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://live.dodopayments.com/checkout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.DODO_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_cart: [
          {
            product_id: 'pdt_0NgcfaCNwsBDoQj0qCdmR',
            quantity: 1,
          },
        ],
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Dodo error:', error);
      return NextResponse.json({ error: 'Payment setup failed' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ checkout_url: data.checkout_url });
  } catch (err) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}