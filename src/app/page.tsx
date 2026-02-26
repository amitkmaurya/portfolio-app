"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Palette,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const highlights = [
  {
    title: "Product strategy",
    description: "Aligning business goals with user needs through clear roadmaps.",
    icon: Briefcase,
  },
  {
    title: "Design systems",
    description: "Scalable UI kits and documentation that keep teams aligned.",
    icon: Sparkles,
  },
  {
    title: "Frontend engineering",
    description: "Pixel-perfect React + Next.js builds with performance in mind.",
    icon: Code2,
  },
  {
    title: "Brand + UI design",
    description: "Modern visual identity paired with conversion-focused layouts.",
    icon: Palette,
  },
  {
    title: "Launch support",
    description: "From MVP to scale, I help teams ship and iterate quickly.",
    icon: Rocket,
  },
  {
    title: "Trusted collaboration",
    description: "Clear communication, async updates, and on-time delivery.",
    icon: Users,
  },
];

const featuredProjects = [
  {
    name: "Lumen Finance",
    role: "Product design + Web build",
    description: "Redesigned the onboarding flow and launched a new marketing site.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Atlas Health",
    role: "Design system + UI",
    description: "Built a modular UI library for 5 cross-functional teams.",
    image:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Orbit Commerce",
    role: "Frontend + Motion",
    description: "Improved product discoverability and boosted conversions by 22%.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { label: "Projects shipped", value: "45+" },
  { label: "Years experience", value: "5+" },
  { label: "Teams supported", value: "18" },
];

const testimonials = [
  {
    name: "Maya R.",
    course: "Head of Product, Lumen",
    quote:
      "Aarav blends strategy with craft. The new experience feels premium and performs better.",
  },
  {
    name: "Dev K.",
    course: "CTO, Atlas Health",
    quote:
      "Reliable partner for design systems. Our velocity doubled after the launch.",
  },
  {
    name: "Priya S.",
    course: "Founder, Innovate Labs",
    quote:
      "Outstanding work on our product redesign. They understood our vision immediately and delivered beyond expectations.",
  },
  {
    name: "Arjun P.",
    course: "VP Design, TechFlow",
    quote:
      "The design system they built has become the backbone of our entire platform. Highly recommended.",
  },
  {
    name: "Sophie M.",
    course: "CEO, Digital First Co",
    quote:
      "Working with them transformed our user experience. We saw a 40% increase in engagement within weeks.",
  },
  {
    name: "Rahul N.",
    course: "Product Manager, Scale Ventures",
    quote:
      "From discovery to launch, they were meticulous and collaborative. Exactly the partner we needed to scale.",
  },
];

const services = [
  { title: "Discovery", icon: ShieldCheck, desc: "Workshops, audits, and UX research." },
  { title: "Product Design", icon: Palette, desc: "Flows, UI kits, and prototyping." },
  { title: "Frontend Build", icon: Code2, desc: "Next.js, animations, and QA." },
  { title: "Launch & Growth", icon: Rocket, desc: "Metrics, optimization, and testing." },
  { title: "Team Enablement", icon: Users, desc: "Design systems and handoff." },
  { title: "Brand Refresh", icon: Sparkles, desc: "Visual identity and storytelling." },
];

const faqs = [
  {
    q: "How do projects typically start?",
    a: "We begin with a discovery call, align on goals, then map scope and timelines.",
  },
  {
    q: "Do you work with startups or enterprises?",
    a: "Both. I partner with startups launching MVPs and enterprises scaling platforms.",
  },
  {
    q: "What is your typical turnaround?",
    a: "Most engagements run 2-6 weeks depending on scope and complexity.",
  },
];

export default function Home() {
  const testimonialPairs = [
    [testimonials[0], testimonials[1]],
    [testimonials[2], testimonials[3]],
    [testimonials[4], testimonials[5]],
  ];

  // Create infinite loop by duplicating pairs
  const duplicatedPairs = [...testimonialPairs, ...testimonialPairs];

  return (
    <div className="">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-8">
              {/* Name with modern styling */}
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Welcome to my portfolio
                </p>
                <h1 className="text-7xl font-black leading-[1.1] dark:text-white md:text-8xl lg:text-9xl">
                  <span className="inline-block">Amit</span>
                  <br />
                  <span className="text-gradient">Kumar</span>
                </h1>
              </div>

              {/* Professional tag */}
              <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 px-5 py-3 text-base font-semibold text-slate-900 dark:from-slate-800 dark:to-slate-900 dark:text-white border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                🚀 Software Engineer & Designer
              </span>

              {/* Description */}
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                Crafting exceptional digital experiences for <span className="font-semibold text-slate-900 dark:text-white">EdTech</span>, <span className="font-semibold text-slate-900 dark:text-white">FinTech</span>, and <span className="font-semibold text-slate-900 dark:text-white">Healthcare</span> platforms. Full-stack expertise meets thoughtful design.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                Start a project
              </Link>
              <Link
                href="/project"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200"
              >
                View projects
              </Link>
            </div>
            <div className="flex gap-6 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 shadow-2xl">
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                  alt="Portfolio preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-4 rounded-2xl bg-white p-6 text-slate-900 shadow-xl dark:bg-slate-950">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Featured case study
                </p>
                <h3 className="text-2xl font-semibold">Lumen Finance rebrand</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  A full-funnel redesign that improved activation and reduced churn.
                </p>
                <Link
                  href="/project"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                >
                  View case study <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {featuredProjects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-2xl border border-slate-100 bg-white p-4 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <div className="relative h-24 overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold">{project.name}</p>
                    <p className="text-xs text-slate-500">{project.description}</p>
                    <p className="mt-3 text-xs font-semibold text-emerald-600">
                      {project.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-grid">
        <div className="mx-auto px-6">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              What I deliver
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Modern product experiences, end to end
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
              From discovery to launch, I build thoughtful, scalable solutions
              that look great and perform even better.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((benefit) => (
              <motion.div
                key={benefit.title}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 shadow-lg"
              >
                <benefit.icon className="mb-4 text-emerald-500" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Services built for modern product teams
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                I partner with startups and scale-ups to design and ship digital
                experiences that drive growth.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950"
                  >
                    <item.icon className="text-emerald-500" size={20} />
                    <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-6 shadow-lg">
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Team workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold">Strategy Sprints</p>
                  <p className="text-xs text-slate-500">
                    Align on goals, KPIs, and scope fast.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold">Design QA</p>
                  <p className="text-xs text-slate-500">
                    Polished UI with responsive handoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grid">
        <div className="mx-auto px-6">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              What Clients Say
            </p>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hear from founders and teams
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Real feedback from builders who turned strategy into growth.
            </p>
          </div>

          {/* Infinite Scrolling Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: "-100%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedPairs.map((pair, idx) => (
                <div key={idx} className="min-w-full flex gap-6 md:min-w-[calc(50%-12px)] lg:min-w-[calc(50%-12px)]">
                  {pair.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="min-w-full flex flex-col gap-6 rounded-lg bg-slate-50 dark:bg-slate-900/50 p-8 shadow-sm hover:shadow-md transition-shadow md:min-w-[calc(50%-12px)]"
                    >
                    
                      {/* Quote Text */}
                      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 flex-grow font-medium">
                        "{testimonial.quote}"
                      </p>

                      {/* Author Info - Bottom */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center flex-shrink-0 text-sm font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                            {testimonial.course}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Gradient Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-950 z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-950 z-10" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Global collaboration, local focus
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Based in Bengaluru and working with teams worldwide. Overlapping
                hours and async-friendly workflow keep projects moving.
              </p>
              <div className="grid gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold">10+ hrs</p>
                  <p className="text-xs text-slate-500">Global timezone overlap</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="text-sm font-semibold">48 hrs</p>
                  <p className="text-xs text-slate-500">Average response time</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-grid">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-950">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {faq.q}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
                Work snapshots
              </p>
              <h2 className="text-3xl font-semibold">A glimpse into recent launches</h2>
              <p className="max-w-2xl text-slate-200">
                Selected interfaces, prototypes, and design explorations across industries.
              </p>
            </div>
            <Link
              href="/gallery"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Work
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fintech UI",
                image:
                  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Design System",
                image:
                  "https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Commerce Landing",
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Mobile Prototype",
                image:
                  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-white/10"
              >
                <div className="relative h-44">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl md:px-12">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Ready to build something great?</h2>
                <p className="text-slate-200">
                  Let’s talk about your goals and craft a clear, high-impact plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/booking"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
                >
                  Start a project
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                >
                  Schedule a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
