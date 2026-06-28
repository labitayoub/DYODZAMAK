import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { whatsappNumber } from "@/data/site";

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[50px] items-center justify-center gap-2 bg-gradient-to-r from-bronze via-gold to-bronze px-6 font-extrabold text-coal shadow-premium transition hover:-translate-y-0.5"
    >
      <Send size={18} />
      {children}
    </Link>
  );
}

export function WhatsAppButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-[50px] items-center justify-center gap-2 border border-beige/30 bg-white/10 px-6 font-extrabold text-ivory transition hover:-translate-y-0.5 hover:bg-white/15"
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}
