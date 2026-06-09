import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Moulinath N.`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-body text-sm text-[#7A7570] hover:text-[#1A1814] mb-10 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#C4622D]/10 text-[#C4622D] text-xs font-body px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="font-body text-xs text-[#7A7570]">{post.readTime}</span>
          <span className="font-body text-xs text-[#7A7570]">
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-heading text-5xl text-[#1A1814] mb-6 leading-tight">{post.title}</h1>
        <p className="font-body text-lg text-[#7A7570] mb-10 leading-relaxed">{post.excerpt}</p>
        <hr className="border-[#EDE9E3] mb-10" />
        <div className="font-body text-[#1A1814] leading-relaxed space-y-6 prose-custom">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="font-heading text-3xl text-[#1A1814] mt-8 mb-4">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            const trimmed = block.trim();
            if (!trimmed) return null;
            return (
              <p key={i} className="text-[#7A7570] leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>
        <div className="mt-16 bg-[#EDE9E3] rounded-xl p-8 text-center">
          <h3 className="font-heading text-3xl text-[#1A1814] mb-3">Enjoyed this post?</h3>
          <p className="font-body text-[#7A7570] mb-6">
            Book a 1:1 session to go deeper on any of these topics.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#C4622D] text-white px-6 py-3 rounded font-body hover:bg-[#a84f22] transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
