import Link from "next/link";
import { Github, Linkedin, PhoneCall } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Services", href: "/facilities" },
  { label: "Work", href: "/gallery" },

  { label: "Testimonials", href: "/testimonials" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Start Project", href: "/booking" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Amit Kumar</h3>
            <p className="text-sm leading-6 text-slate-400">
              Freelance software engineer and designer building digital products
              for EdTech, FinTech, healthcare, and educational platforms.
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>India · Remote worldwide</p>
              <p>amitmaurya9929@gmail.com</p>
              <p>+91-9939522297</p>
              <p>Available for freelance projects</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Follow Us
            </h4>
            <div className="flex gap-3 text-slate-400">
              <Link href="https://github.com/amitkmaurya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </Link>
              <Link href="https://github.com/amitkmaurya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              © 2026 Amit Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
