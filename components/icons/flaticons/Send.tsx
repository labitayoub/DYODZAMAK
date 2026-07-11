"use client";

export function Send({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 2v6m0 4v6M2 12h6m4 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 12l8-6v12l8-6v12L3 12z" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}
