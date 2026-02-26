"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+91-9939522297";
const DEFAULT_MESSAGE =
  "Hi Amit! I'd like to discuss a project. Can we connect?";

export default function WhatsAppWidget() {
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
    >
      <MessageCircle size={18} />
      Let’s chat
    </Link>
  );
}
