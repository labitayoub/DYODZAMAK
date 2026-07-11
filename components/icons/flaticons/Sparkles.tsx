"use client";

export function Sparkles({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <path d="M12 2l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="currentColor"/>
      <path d="M20 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor"/>
      <path d="M4 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor"/>
    </svg>
  );
}
