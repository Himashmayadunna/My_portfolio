// ============================================================
// components/ui/Badge.tsx
// Small pill badge for tech stack labels
// ============================================================

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-blue-300">
      {children}
    </span>
  );
}
