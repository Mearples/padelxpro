import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../../data/profile';
import Section from '../layout/Section';

export default function Education() {
  return (
    <Section title="Education" subtitle="Academic credentials and qualifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((entry) => (
          <div
            key={`${entry.institution}-${entry.year}`}
            className="glass-card p-5 hover:border-amber-500/30 transition-colors duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-slate-100">{entry.degree}</h3>
                <p className="text-sm text-slate-400 mt-1">{entry.institution}</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs text-slate-500">{entry.year}</span>
                </div>
                {entry.detail && (
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{entry.detail}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
