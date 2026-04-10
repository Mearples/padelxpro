import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { competencyData } from '../../data/skills';
import Section from '../layout/Section';

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }> }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-slate-300">{p.name}:</span>
          <span className="text-white font-semibold">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function CompetencyRadar() {
  return (
    <Section title="Skills & Competencies" subtitle="Compared against typical CEO/MD profile benchmark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="glass-card p-6">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={competencyData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis
                dataKey="shortLabel"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: '#64748b', fontSize: 10 }}
                axisLine={false}
              />
              <Radar
                name="Mike Earp"
                dataKey="candidateScore"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Radar
                name="CEO/MD Benchmark"
                dataKey="benchmarkScore"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Legend
                wrapperStyle={{ color: '#94a3b8', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar breakdown */}
        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
            Competency Breakdown
          </h3>
          <div className="space-y-4">
            {competencyData.map((item) => (
              <div key={item.axis}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-300">{item.shortLabel}</span>
                  <span className="text-sm font-semibold text-amber-400">{item.candidateScore}</span>
                </div>
                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.candidateScore}%` }}
                  />
                  <div
                    className="absolute h-full w-0.5 bg-blue-400"
                    style={{ left: `${item.benchmarkScore}%` }}
                    title={`Benchmark: ${item.benchmarkScore}`}
                  />
                </div>
                <div className="flex justify-between mt-0.5">
                  <span className="text-xs text-slate-600">0</span>
                  <span className="text-xs text-blue-400">Benchmark: {item.benchmarkScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
