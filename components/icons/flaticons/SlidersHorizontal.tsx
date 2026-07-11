"use client";

export function SlidersHorizontal({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 6h4M10 6h10M4 12h10M16 12h4M4 18h4M10 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="8" cy="6" r="1.5" fill="currentColor"/>
      <circle cx="14" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  );
}
