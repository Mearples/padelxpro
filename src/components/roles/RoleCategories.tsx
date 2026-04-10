import { roleCategories } from '../../data/roles';
import { Target } from 'lucide-react';

export default function RoleCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {roleCategories.map((role) => (
        <div key={role.title} className="glass-card p-6 hover:border-amber-500/30 transition-colors duration-300">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-white">{role.title}</h3>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-2xl font-bold text-amber-400">{role.fitScore}%</span>
              <p className="text-xs text-slate-500">Fit Score</p>
            </div>
          </div>

          <p className="text-sm text-slate-400 mb-4 leading-relaxed">{role.description}</p>

          {/* Fit score bar */}
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-1000"
              style={{ width: `${role.fitScore}%` }}
            />
          </div>

          {/* Key requirements */}
          <div className="flex flex-wrap gap-1.5">
            {role.keyRequirements.map((req) => (
              <span key={req} className="px-2 py-0.5 text-xs bg-slate-700/50 text-slate-300 rounded-full">
                {req}
              </span>
            ))}
          </div>

          {/* Example companies */}
          <div className="mt-3 pt-3 border-t border-slate-700/50">
            <p className="text-xs text-slate-500 mb-1.5">Example organisations:</p>
            <div className="flex flex-wrap gap-1.5">
              {role.exampleCompanies.map((co) => (
                <span key={co} className="text-xs text-amber-400/80">{co}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
