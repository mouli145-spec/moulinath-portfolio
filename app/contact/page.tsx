import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Moulinath N.",
  description: "Get in touch with Moulinath N. for design consulting, speaking, or collaborations.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">Get in Touch</p>
        <h1 className="font-heading text-6xl text-[#1A1814] mb-6">Contact</h1>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="font-body text-lg text-[#7A7570] mb-10 leading-relaxed">
              Whether you&apos;re exploring a service, have a question, or want to discuss a collaboration — I&apos;d love
              to hear from you. I respond to all enquiries within 24 hours.
            </p>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-[#1A1814] mb-4">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#C4622D] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-semibold text-[#1A1814]">Email</p>
                    <a
                      href="mailto:hello@moulinathn.com"
                      className="font-body text-sm text-[#7A7570] hover:text-[#C4622D] transition-colors"
                    >
                      hello@moulinathn.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C4622D] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-semibold text-[#1A1814]">Location</p>
                    <p className="font-body text-sm text-[#7A7570]">Bengaluru, India</p>
                    <p className="font-body text-xs text-[#7A7570]">Available for remote work globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#C4622D] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-semibold text-[#1A1814]">Response Time</p>
                    <p className="font-body text-sm text-[#7A7570]">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#EDE9E3] rounded-xl p-6">
              <h3 className="font-heading text-2xl text-[#1A1814] mb-3">Prefer a call?</h3>
              <p className="font-body text-sm text-[#7A7570] mb-4">
                Book a free 30-minute discovery call directly in my calendar.
              </p>
              <a
                href="/book"
                className="block text-center bg-[#C4622D] text-white py-2 rounded font-body text-sm hover:bg-[#a84f22] transition-colors"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
