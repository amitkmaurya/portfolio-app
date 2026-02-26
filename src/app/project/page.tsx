"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    name: "Lumen Finance",
    price: "Fintech · Growth",
    capacity: "Role: Product design + Web build",
    amenities: ["UX audit", "New onboarding", "Marketing site"],
    status: "Shipped",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Atlas Health",
    price: "Healthtech · Platform",
    capacity: "Role: Design system lead",
    amenities: ["Component library", "Docs", "Accessibility"],
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Orbit Commerce",
    price: "E-commerce · Web",
    capacity: "Role: Frontend + UI",
    amenities: ["Landing redesign", "Motion", "SEO"],
    status: "Shipped",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pulse Analytics",
    price: "SaaS · B2B",
    capacity: "Role: Product strategy",
    amenities: ["Journey mapping", "Prototype", "Go-to-market"],
    status: "Discovery",
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Northwind Studio",
    price: "Brand · Web",
    capacity: "Role: Brand + UX",
    amenities: ["Visual identity", "Design system", "Launch"],
    status: "Shipped",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

export default function RoomsPage() {
  return (
    <div>
      <PageHeader
        title="Selected projects"
        subtitle="A snapshot of product launches, design systems, and web builds." 
        kicker="Projects"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Project focus
              </h2>
              <p className="text-sm text-slate-500">
                Browse by industry, role, and outcomes.
              </p>
            </div>
            <div className="flex gap-2">
              {["All", "Fintech", "Healthtech", "SaaS", "E-commerce", "Brand"].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <motion.div
                key={room.name}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-6 shadow-md dark:bg-slate-950"
              >
                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {room.name}
                  </h3>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {room.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{room.capacity}</p>
                <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {room.price}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {room.amenities.map((amenity) => (
                    <li key={amenity}>• {amenity}</li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
                  >
                    View case study
                  </Link>
                  <Link
                    href="/booking"
                    className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
                  >
                    Start similar
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
