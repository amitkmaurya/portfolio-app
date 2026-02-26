"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
];

const servicesNavItems = [
  { label: "Services", href: "/facilities" },
  { label: "Work", href: "/gallery" },
];

const resourcesNavItems = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl tracking-tight">Amit Kumar</span>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-600">
            Software Engineer & Designer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {/* Main Items */}
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              Services
              <ChevronDown size={16} className="transition group-hover:rotate-180" />
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden min-w-48">
              {servicesNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              Resources
              <ChevronDown size={16} className="transition group-hover:rotate-180" />
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden min-w-48">
              {resourcesNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200"
          >
            Let’s Talk
          </Link>
          <Link
            href="/booking"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Start Project
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-white/90 px-6 py-4 backdrop-blur dark:bg-slate-950/90 lg:hidden">
          <div className="grid gap-2">
            {/* Main Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown Mobile */}
            <button
              onClick={() => setDropdownOpen(dropdownOpen === "services" ? null : "services")}
              className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 w-full text-left"
            >
              Services
              <ChevronDown size={16} className={`transition ${dropdownOpen === "services" ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen === "services" && (
              <div className="ml-3 space-y-2 border-l border-slate-200 dark:border-slate-700 pl-3">
                {servicesNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Resources Dropdown Mobile */}
            <button
              onClick={() => setDropdownOpen(dropdownOpen === "resources" ? null : "resources")}
              className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 w-full text-left"
            >
              Resources
              <ChevronDown size={16} className={`transition ${dropdownOpen === "resources" ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen === "resources" && (
              <div className="ml-3 space-y-2 border-l border-slate-200 dark:border-slate-700 pl-3">
                {resourcesNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <Link
                href="/contact"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Let’s Talk
              </Link>
              <Link
                href="/booking"
                className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
