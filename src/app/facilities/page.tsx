"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wifi,
  Dumbbell,
  ShieldCheck,
  Utensils,
  BookOpen,
  WashingMachine,
} from "lucide-react";

const facilities = [
  {
    title: "Product Discovery",
    description: "Research, audits, and user interviews to align on outcomes.",
    icon: BookOpen,
  },
  {
    title: "UX & UI Design",
    description: "Flows, prototypes, and visual systems that convert.",
    icon: Dumbbell,
  },
  {
    title: "Design Systems",
    description: "Scalable components, tokens, and documentation.",
    icon: ShieldCheck,
  },
  {
    title: "Frontend Delivery",
    description: "Next.js builds with animation and performance optimization.",
    icon: Wifi,
  },
  {
    title: "Launch Strategy",
    description: "Go-to-market support, growth experiments, and QA.",
    icon: Utensils,
  },
  {
    title: "Team Enablement",
    description: "Workshops, async updates, and stakeholder alignment.",
    icon: WashingMachine,
  },
];

export default function FacilitiesPage() {
  return (
    <div>
      <PageHeader
        title="Services tailored to product teams"
        subtitle="Strategy, design, and engineering support to help you ship faster."
        kicker="Services"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative h-56 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <motion.div
                key={facility.title}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 shadow-lg"
              >
                <facility.icon className="text-emerald-500" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {facility.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white shadow-xl md:p-12">
            <h3 className="text-2xl font-semibold">Need a custom engagement?</h3>
            <p className="mt-3 text-slate-200">
              Let’s tailor the scope to your roadmap, timeline, and team structure.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                Contact Us
              </a>
              <a
                href="/booking"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
