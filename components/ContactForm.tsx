"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-body text-sm text-[#1A1814] mb-2">Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white border border-[#EDE9E3] rounded-lg px-4 py-3 font-body text-[#1A1814] focus:outline-none focus:border-[#C4622D] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-body text-sm text-[#1A1814] mb-2">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white border border-[#EDE9E3] rounded-lg px-4 py-3 font-body text-[#1A1814] focus:outline-none focus:border-[#C4622D] transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block font-body text-sm text-[#1A1814] mb-2">Subject *</label>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full bg-white border border-[#EDE9E3] rounded-lg px-4 py-3 font-body text-[#1A1814] focus:outline-none focus:border-[#C4622D] transition-colors"
          placeholder="How can I help?"
        />
      </div>
      <div>
        <label className="block font-body text-sm text-[#1A1814] mb-2">Message *</label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white border border-[#EDE9E3] rounded-lg px-4 py-3 font-body text-[#1A1814] focus:outline-none focus:border-[#C4622D] transition-colors resize-none"
          placeholder="Tell me about your project, goals, or questions..."
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 font-body text-sm">
          Message sent! I&apos;ll reply within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 font-body text-sm">
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#C4622D] text-white py-3 rounded-lg font-body hover:bg-[#a84f22] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
