"use client";

import { useState } from "react";
import Script from "next/script";

interface BookingButtonProps {
  serviceSlug: string;
  serviceTitle: string;
  price: number;
}

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

export default function BookingButton({ serviceSlug, serviceTitle, price }: BookingButtonProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleBook() {
    setLoading(true);
    try {
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceSlug, amount: price }),
      });
      const data = await res.json();

      if (!data.orderId) throw new Error("Failed to create order");

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: price,
        currency: "INR",
        name: "Moulinath N. Consultancy",
        description: serviceTitle,
        order_id: data.orderId,
        handler: async function (response: Record<string, string>) {
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyData.verified) {
            setSuccess(true);
          }
        },
        theme: { color: "#C4622D" },
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-2xl mb-2">🎉</div>
        <h3 className="font-heading text-2xl text-green-800 mb-2">Payment Successful!</h3>
        <p className="font-body text-green-700 text-sm">
          Thank you! I&apos;ll be in touch within 24 hours to schedule your session.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <button
        onClick={handleBook}
        disabled={loading}
        className="w-full bg-[#C4622D] text-white py-4 rounded-xl font-body text-lg hover:bg-[#a84f22] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : `Book Now`}
      </button>
    </>
  );
}
