import { companyTypes } from '../../data/roles';
import { Building } from 'lucide-react';

export default function CompanyTypes() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Building className="w-5 h-5 text-blue-400" />
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
          Target Company Types
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {companyTypes.map((ct) => (
          <div
            key={ct.name}
            className="group relative px-4 py-2.5 bg-slate-700/30 border border-slate-600/40 rounded-xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
          >
            <span className="text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors">
              {ct.name}
            </span>
            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-xl">
              {ct.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
