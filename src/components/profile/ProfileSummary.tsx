import { Briefcase, GraduationCap, TrendingUp, Building2, Globe, Rocket } from 'lucide-react';
import { profileStats } from '../../data/profile';
import Section from '../layout/Section';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export default function ProfileSummary() {
  return (
    <Section title="Profile Overview" subtitle="Key highlights at a glance">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {profileStats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card p-5 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors duration-300 group"
          >
            <div className="text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
              {iconMap[stat.icon]}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-slate-300">{stat.label}</div>
            {stat.sublabel && (
              <div className="text-xs text-slate-500 mt-1">{stat.sublabel}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
