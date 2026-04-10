import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { geographicMarkets } from '../../data/geography';

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
      <p className="text-slate-300 text-sm font-medium mb-1">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-slate-400">{p.name}:</span>
          <span className="text-white font-semibold">{p.value}/100</span>
        </div>
      ))}
    </div>
  );
};

export default function GeographicComparison() {
  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-slate-300 mb-4">
        Geographic Market Comparison
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={geographicMarkets}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
          <YAxis type="category" dataKey="region" tick={{ fill: '#94a3b8', fontSize: 11 }} width={90} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
          <Bar dataKey="opportunity" name="Opportunity" fill="#f59e0b" radius={[0, 2, 2, 0]} />
          <Bar dataKey="executiveDemand" name="Exec Demand" fill="#3b82f6" radius={[0, 2, 2, 0]} />
          <Bar dataKey="costEfficiency" name="Cost Efficiency" fill="#10b981" radius={[0, 2, 2, 0]} />
          <Bar dataKey="qualityOfLife" name="Quality of Life" fill="#8b5cf6" radius={[0, 2, 2, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
