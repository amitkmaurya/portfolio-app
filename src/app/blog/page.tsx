"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "Design systems that scale with your team",
    category: "Design Systems",
    date: "Feb 12, 2026",
    excerpt: "How to structure tokens, components, and governance for fast-moving teams.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "From prototype to production in 4 weeks",
    category: "Product",
    date: "Jan 28, 2026",
    excerpt: "A sprint-based framework for shipping high-quality MVPs quickly.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Landing pages that convert",
    category: "Growth",
    date: "Jan 15, 2026",
    excerpt: "Structure, messaging, and UI patterns that lift conversion rates.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="Insights on product, design, and engineering"
        subtitle="Thoughts on building delightful digital experiences."
        kicker="Insights"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-950">
                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  {post.category}
                </span>
                <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500">{post.date}</p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
