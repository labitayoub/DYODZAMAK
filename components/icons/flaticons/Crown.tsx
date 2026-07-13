"use client";

export function Crown({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <path d="M3 21h18M4 13l2-6h3l2 4 2-4h3l2 6v2H4v-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8" cy="7" r="1" fill="currentColor"/>
      <circle cx="16" cy="7" r="1" fill="currentColor"/>
      <path d="M12 5l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
