"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rohit M.",
    rating: 5,
    course: "VP Product, Orbit Commerce",
    quote: "Aarav shipped a beautiful new experience that lifted conversions fast.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ananya G.",
    rating: 5,
    course: "CEO, Lumen Finance",
    quote: "Sharp strategic thinking and exceptional design craft throughout.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vivek P.",
    rating: 5,
    course: "CTO, Atlas Health",
    quote: "The design system delivered was production-ready and scalable.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader
        title="Stories from clients"
        subtitle="What product leaders say about working together."
        kicker="Testimonials"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Video testimonials
              </h2>
              <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
                <p className="text-sm text-slate-200">
                  Client story reel coming soon. Embed your video testimonials here.
                </p>
                <div className="mt-6 h-48 rounded-2xl bg-slate-800" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Highlight quotes
              </h2>
              {reviews.slice(0, 2).map((review) => (
                <div key={review.name} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
                  <p className="text-sm text-slate-600 dark:text-slate-300">“{review.quote}”</p>
                  <p className="mt-3 text-xs font-semibold text-slate-900 dark:text-white">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500">{review.course}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-6 shadow-md dark:bg-slate-950"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm text-amber-500">
                  {"★".repeat(review.rating)}
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">“{review.quote}”</p>
                <p className="mt-3 text-xs font-semibold text-slate-900 dark:text-white">
                  {review.name}
                </p>
                <p className="text-xs text-slate-500">{review.course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
