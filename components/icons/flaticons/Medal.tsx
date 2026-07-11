"use client";

export function Medal({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <circle cx="7" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="14" r="6" fill="currentColor"/>
      <path d="M7 13v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 13v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
