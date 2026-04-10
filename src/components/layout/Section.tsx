import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, subtitle, children, id }: SectionProps) {
  const ref = useScrollAnimation();

  return (
    <section id={id} ref={ref} className="fade-in-up px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto w-full">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-slate-400 text-sm md:text-base">{subtitle}</p>
        )}
        <div className="mt-3 h-1 w-16 bg-amber-500 rounded-full" />
      </div>
      {children}
    </section>
  );
}
