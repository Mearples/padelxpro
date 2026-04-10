import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Rocket, Handshake, BarChart3, Settings, Heart } from 'lucide-react';
import { careerEntries } from '../../data/career';
import Section from '../layout/Section';

const categoryConfig = {
  entrepreneurship: { color: '#f59e0b', icon: <Rocket className="w-5 h-5" /> },
  consulting: { color: '#3b82f6', icon: <Handshake className="w-5 h-5" /> },
  investment: { color: '#10b981', icon: <BarChart3 className="w-5 h-5" /> },
  operations: { color: '#8b5cf6', icon: <Settings className="w-5 h-5" /> },
  other: { color: '#ec4899', icon: <Heart className="w-5 h-5" /> },
};

const sorted = [...careerEntries].sort((a, b) => b.startYear - a.startYear || b.id - a.id);

export default function CareerTimeline() {
  return (
    <Section title="Career Timeline" subtitle="16+ years of venture building, strategy, and investment">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(categoryConfig).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: val.color }} />
            <span className="capitalize">{key}</span>
          </div>
        ))}
      </div>

      <VerticalTimeline lineColor="#334155">
        {sorted.map((entry) => {
          const config = categoryConfig[entry.category];
          return (
            <VerticalTimelineElement
              key={entry.id}
              date={`${entry.startDate} — ${entry.endDate}`}
              iconStyle={{ background: config.color, color: '#fff', boxShadow: `0 0 0 4px ${config.color}40` }}
              icon={config.icon}
            >
              <h3 className="vertical-timeline-element-title">{entry.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {entry.company} &middot; {entry.location}
              </h4>
              <ul className="mt-2 space-y-1">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: config.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}
