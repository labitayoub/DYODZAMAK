import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { whatsappNumber } from "@/data/site";

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="button-primary">
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="button-secondary">
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

export function WhatsAppButton({ children }: { children: React.ReactNode }) {
  return (
    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="button-whatsapp">
      <WhatsAppIcon size={17} />
      {children}
    </a>
  );
}
