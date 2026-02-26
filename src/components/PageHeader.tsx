"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  kicker?: string;
}

export default function PageHeader({ title, subtitle, kicker }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {kicker ? (
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
              {kicker}
            </span>
          ) : null}
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
