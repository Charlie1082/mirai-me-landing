"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center md:mb-16 ${className}`}>
      <h2 className="font-display text-3xl font-bold text-warm-800 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
