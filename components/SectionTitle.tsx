"use client";

import { FadeIn } from "@/components/Motion";

export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const tone = dark ? "text-[#f7f3ed]" : "text-[#111111]";
  const copyTone = dark ? "text-[rgba(247,243,237,0.7)]" : "text-[rgba(17,17,17,0.62)]";

  return (
    <FadeIn className={`max-w-4xl ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={`mt-5 text-4xl font-medium leading-[1.15] tracking-[-0.02em] md:text-6xl ${tone}`}>{title}</h2>
      {text ? <p className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${copyTone}`}>{text}</p> : null}
    </FadeIn>
  );
}
