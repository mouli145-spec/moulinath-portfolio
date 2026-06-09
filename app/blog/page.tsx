import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Moulinath N.",
  description: "Insights on UX design, design leadership, AI tools, and building design cultures.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">Writing</p>
        <h1 className="font-heading text-6xl text-[#1A1814] mb-6">Blog</h1>
        <p className="font-body text-lg text-[#7A7570] max-w-2xl mb-16">
          Thoughts on design leadership, UX strategy, AI in design, and building careers in design.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-[#EDE9E3] rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#C4622D]/10 text-[#C4622D] text-xs font-body px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-body text-xs text-[#7A7570]">{post.readTime}</span>
                </div>
                <h2 className="font-heading text-3xl text-[#1A1814] mb-3 group-hover:text-[#C4622D] transition-colors">
                  {post.title}
                </h2>
                <p className="font-body text-[#7A7570] text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-[#7A7570]">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <ArrowRight size={16} className="text-[#C4622D]" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
