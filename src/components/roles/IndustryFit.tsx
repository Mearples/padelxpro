import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { industryFits } from '../../data/roles';

const colors = ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'];

export default function IndustryFit() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
        Industry Fit Scores
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {industryFits.map((fit, idx) => {
          const chartData = [
            { name: 'bg', value: 100, fill: '#1e293b' },
            { name: fit.industry, value: fit.score, fill: colors[idx] },
          ];
          return (
            <div key={fit.industry} className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    barSize={8}
                    data={chartData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar
                      dataKey="value"
                      cornerRadius={4}
                      background={{ fill: '#334155' }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors[idx] }}>
                    {fit.score}%
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-200">{fit.industry}</p>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed max-w-[180px]">
                {fit.reasoning}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
