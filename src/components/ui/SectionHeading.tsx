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
      <div className="flex items-center gap-4 text-[var(--color-mute)]">
        <span className="numeric-tag">{index}</span>
        <span className="h-px w-10 bg-[var(--color-iron)]" aria-hidden="true" />
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
