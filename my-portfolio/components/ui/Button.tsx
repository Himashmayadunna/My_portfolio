// ============================================================
// components/ui/Button.tsx
// Reusable button with multiple variants
// ============================================================

import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 border border-white/10",
  outline:
    "border border-white/20 text-neutral-300 hover:border-white/40 hover:text-white",
};

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
