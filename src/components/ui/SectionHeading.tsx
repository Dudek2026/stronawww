import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  italic,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  italic?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)] tabular-nums">
          {index}
        </span>
        <span className="h-px w-10 bg-[var(--color-accent)]/40" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="text-display-md text-[var(--color-bone)] max-w-3xl">
        {title}
        {italic && (
          <span className="italic-display text-[var(--color-silver)]"> {italic}</span>
        )}
      </h2>
    </div>
  );
}
