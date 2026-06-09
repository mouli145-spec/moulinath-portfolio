import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { serviceSlug, amount } = await req.json();

    if (!serviceSlug || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const Razorpay = (await import("razorpay")).default;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `receipt_${serviceSlug}_${Date.now()}`,
      notes: {
        service: serviceSlug,
      },
    });

    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
