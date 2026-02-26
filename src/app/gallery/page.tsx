"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  "Product UI",
  "Design Systems",
  "Branding",
  "Web Experiences",
  "Mobile",
  "Prototypes",
];

const galleryItems = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Product UI",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Design System",
    category: "Design Systems",
    image:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Brand Toolkit",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Workshop Sprint",
    category: "Prototypes",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Commerce Website",
    category: "Web Experiences",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Mobile Flow",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "SaaS Portal",
    category: "Product UI",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Growth Landing",
    category: "Web Experiences",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Prototype Kit",
    category: "Prototypes",
    image:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        title="Work gallery"
        subtitle="Snapshots of UI explorations, systems, and launches."
        kicker="Work"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-200"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-100 p-6 shadow-lg dark:bg-slate-900"
              >
                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/20 opacity-0 transition group-hover:opacity-100" />
                <div className="relative space-y-2">
                  <span className="text-xs uppercase tracking-widest text-slate-500">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Tap to expand and explore this space.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
