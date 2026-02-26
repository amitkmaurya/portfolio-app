"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Palette, Briefcase, Users, Zap, Award } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, responsive design patterns.",
  },
  {
    icon: Briefcase,
    title: "Backend Development",
    desc: "Node.js, Express, databases, APIs, server architecture, and scalable solutions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Figma, design systems, prototyping, user research, and conversion-focused interfaces.",
  },
  {
    icon: Users,
    title: "Product Strategy",
    desc: "Discovery, roadmaps, user flows, metrics, and cross-functional collaboration.",
  },
  {
    icon: Award,
    title: "Design Systems",
    desc: "Component libraries, documentation, accessibility, and scalable design frameworks.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimization, SEO, Core Web Vitals, load time reduction, and best practices.",
  },
];

const industries = [
  { name: "EdTech", desc: "Learning platforms, course management, student dashboards" },
  { name: "FinTech", desc: "Payment systems, analytics, dashboards, financial tools" },
  { name: "Healthcare", desc: "Patient portals, telemedicine, health tracking, data management" },
];

const timeline = [
  { year: "2020-Present", title: "Freelancing Begins", desc: "Started building websites and apps for startups and small businesses." },
  { year: "2021-2024", title: "Orcip Pvt. Ltd.", desc: "Worked as a web designer in EdTech, developing and designing education technology platforms." },
  { year: "2024-2026", title: "IIT Kanpur Sathee Project", desc: "Collaborated with Computer Science Engineering department at IIT Kanpur on the Sathee project." },
  { year: "2026", title: "Trovakap Pvt. Ltd.", desc: "Joined as a collaborative partner, bringing full-stack expertise and design innovation." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Building products that solve real problems"
        subtitle="Freelance software engineer and designer with 6+ years of experience across EdTech, FinTech, healthcare, and education."
        kicker="About"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">My journey</h2>
            <p className="text-slate-600 dark:text-slate-300">
              I'm a software engineer and designer passionate about solving problems through
              technology. With experience across EdTech, FinTech, healthcare, and education,
              I bring both technical depth and design thinking to every project.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
                <p className="text-sm font-semibold">Vision</p>
                <p className="text-xs text-slate-500">
                  Create impactful digital products that solve real-world problems.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
                <p className="text-sm font-semibold">Mission</p>
                <p className="text-xs text-slate-500">
                  Deliver quality software and thoughtful design for sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 shadow-lg">
            <div className="relative h-40 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1000&q=80"
                alt="Design workspace"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What I specialize in</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>• Full-stack web and mobile applications</li>
              <li>• React, Node.js, and modern web frameworks</li>
              <li>• UI/UX design with design systems</li>
              <li>• EdTech, FinTech, healthcare platforms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Expertise & Skills</h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
                A comprehensive skill set spanning full-stack development, design, and product strategy.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((skill) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
                >
                  <skill.icon className="mb-4 h-8 w-8 text-emerald-500" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Industries & Domains */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Industry Experience</h3>
              <div className="grid gap-5 md:grid-cols-3">
                {industries.map((industry) => (
                  <motion.div
                    key={industry.name}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 p-6 dark:from-emerald-950/20 dark:to-blue-950/20"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {industry.name}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {industry.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Tech Stack</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Frontend</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    React, Next.js, TypeScript, Tailwind CSS, Framer Motion
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Backend</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Node.js, Express, MongoDB, PostgreSQL, REST APIs
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Design</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Figma, Prototyping, UI/UX Design, Design Systems
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Tools</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Git, VS Code, Vercel, Firebase, AWS basics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Career timeline</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold text-blue-600">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
