"use client";

export function Gem({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <path d="M12 2l4 6h-8l4-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M5 8l2 8 5 4 5-4 2-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 8h10M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
