// ============================================================
// components/ui/Badge.tsx
// Small pill badge for tech stack labels
// ============================================================

import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span 
      className={cn("inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-blue-300", className)}
      {...props}
    >
      {children}
    </span>
  );
}
