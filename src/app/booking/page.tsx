"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { useState } from "react";

const steps = [
  "Project Type",
  "Timeline",
  "Your Details",
  "Confirmation",
];

export default function BookingPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <PageHeader
        title="Start a project"
        subtitle="Share a few details and I’ll get back with a clear plan and timeline."
        kicker="Project Intake"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-950">
            <div className="relative h-40 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80"
                alt="Project planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                      index <= activeStep
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Project Type
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
                  <option>Product design</option>
                  <option>Design system</option>
                  <option>Marketing website</option>
                  <option>Frontend development</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Budget Range
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
                  <option>₹50k - ₹1L</option>
                  <option>₹1L - ₹2.5L</option>
                  <option>₹2.5L - ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Timeline
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
                  <option>2-4 weeks</option>
                  <option>1-2 months</option>
                  <option>Quarterly</option>
                  <option>Ongoing</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Email or Phone
                </label>
                <input
                  type="text"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Project Brief
              </label>
              <textarea
                className="mt-2 h-24 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                placeholder="Describe your product, goals, and any existing assets"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
              >
                Back
              </button>
              <button
                type="button"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
