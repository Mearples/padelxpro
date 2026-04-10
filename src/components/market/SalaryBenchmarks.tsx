import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';
import { salaryBenchmarks } from '../../data/marketData';

const regionColors: Record<string, string> = {
  'South Africa': '#f59e0b',
  'East Africa': '#10b981',
  'Europe': '#3b82f6',
  'Australasia': '#8b5cf6',
};

// Reshape data for display: group by role, show median for each region
const roles = ['CEO / MD', 'COO', 'Head of Dev', 'Country Mgr'];
const chartData = roles.map((role) => {
  const entry: Record<string, string | number> = { role };
  salaryBenchmarks
    .filter((s) => s.role === role)
    .forEach((s) => {
      entry[s.region] = s.median;
      entry[`${s.region}_min`] = s.min;
      entry[`${s.region}_max`] = s.max;
    });
  return entry;
});

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; dataKey: string }>; label?: string }) => {
  if (!active || !payload) return null;

  const roleData = salaryBenchmarks.filter((s) => s.role === label);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
      <p className="text-slate-300 text-sm font-medium mb-2">{label}</p>
      {roleData.map((r) => (
        <div key={r.region} className="flex items-center gap-2 text-sm mb-1">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: regionColors[r.region] }} />
          <span className="text-slate-400">{r.region}:</span>
          <span className="text-white font-semibold">
            ${r.min}k — ${r.median}k — ${r.max}k
          </span>
        </div>
      ))}
    </div>
  );
};

export default function SalaryBenchmarks() {
  const regions = Object.keys(regionColors);

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-1">
        Salary Benchmarks (USD, median)
      </h3>
      <p className="text-xs text-slate-500 mb-4">Hover for full min/median/max ranges</p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="role" tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(v) => `$${v}k`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
          {regions.map((region) => (
            <Bar key={region} dataKey={region} name={region} fill={regionColors[region]} radius={[2, 2, 0, 0]}>
              {chartData.map((_, idx) => (
                <Cell key={idx} fill={regionColors[region]} />
              ))}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
