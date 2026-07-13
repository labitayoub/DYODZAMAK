"use client";

export function Trophy({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <path d="M3 7h2v4c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V7h2V5H3v2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 15v3h6v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 18h2v2h-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="9" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="9" r="1.5" fill="currentColor"/>
    </svg>
  );
}
