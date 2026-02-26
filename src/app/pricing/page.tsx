"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 65000,
    yearly: 58000,
    features: ["Product audit", "1 design sprint", "UX recommendations"],
  },
  {
    name: "Growth",
    monthly: 120000,
    yearly: 108000,
    features: ["UX + UI design", "Prototype", "Design QA"],
  },
  {
    name: "Scale",
    monthly: 220000,
    yearly: 198000,
    features: ["Design system", "Frontend build", "Analytics support"],
  },
  {
    name: "Enterprise",
    monthly: 350000,
    yearly: 315000,
    features: ["Embedded team", "Workshops", "Priority support"],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div>
      <PageHeader
        title="Flexible pricing for modern teams"
        subtitle="Choose a plan that matches your roadmap. Save more with longer retainers."
        kicker="Pricing"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Engagement plans
              </h2>
              <p className="text-sm text-slate-500">Switch to yearly to save up to 12%.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 p-1 text-xs font-semibold dark:border-slate-700">
              <button
                className={`rounded-full px-4 py-1 ${billing === "monthly" ? "bg-slate-900 text-white" : "text-slate-600 dark:text-slate-300"}`}
                onClick={() => setBilling("monthly")}
              >
                Retainer
              </button>
              <button
                className={`rounded-full px-4 py-1 ${billing === "yearly" ? "bg-slate-900 text-white" : "text-slate-600 dark:text-slate-300"}`}
                onClick={() => setBilling("yearly")}
              >
                Project
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-950">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  ₹{billing === "monthly" ? plan.monthly : plan.yearly}
                  <span className="text-sm font-medium text-slate-500">/mo</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <a
                  href="/booking"
                  className="mt-6 block rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Start project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
