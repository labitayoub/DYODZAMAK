"use client";

import { FadeIn } from "@/components/Motion";

export default function SectionTitle({
  eyebrow,
  title,
  text,
  dark = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <span className="mb-3 inline-flex text-sm font-black uppercase text-bronze">{eyebrow}</span>}
      <h2 className={`text-3xl font-black leading-tight md:text-5xl ${dark ? "text-ivory" : "text-coal"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-8 ${dark ? "text-ivory/65" : "text-coal/62"}`}>{text}</p>}
    </FadeIn>
  );
}
