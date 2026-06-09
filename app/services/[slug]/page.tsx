import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Moulinath N.`,
    description: service.desc,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-body text-sm text-[#7A7570] hover:text-[#1A1814] mb-10 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Services
        </Link>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">{service.duration}</p>
            <h1 className="font-heading text-5xl text-[#1A1814] mb-6">{service.title}</h1>
            <p className="font-body text-[#7A7570] text-lg leading-relaxed mb-10">{service.longDesc}</p>
            <h2 className="font-heading text-2xl text-[#1A1814] mb-4">What&apos;s Included</h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-[#1A1814]">
                  <span className="text-[#C4622D] font-semibold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="bg-[#EDE9E3] rounded-xl p-6 sticky top-24">
              <div className="font-heading text-4xl text-[#C4622D] mb-1">{service.priceFormatted}</div>
              <p className="font-body text-xs text-[#7A7570] uppercase tracking-wider mb-6">{service.duration}</p>
              <BookingButton
                serviceSlug={service.slug}
                serviceTitle={service.title}
                price={service.price}
              />
              <p className="font-body text-xs text-[#7A7570] text-center mt-4">
                Secure payment via Razorpay. GST as applicable.
              </p>
              <div className="mt-6 pt-6 border-t border-[#d4cfc9]">
                <p className="font-body text-sm text-[#7A7570] mb-3">Not sure which service fits?</p>
                <Link
                  href="/book"
                  className="block text-center border border-[#1A1814] text-[#1A1814] py-2 rounded font-body text-sm hover:bg-[#1A1814] hover:text-white transition-colors"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
