import { MapPin, Mail, ExternalLink } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            {/* Name and title */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-xs font-medium tracking-wide uppercase">Open to opportunities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
              Mike Earp
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium mb-2">
              Founder & Entrepreneur
            </p>
            <p className="text-base text-slate-400 max-w-2xl mb-6 leading-relaxed">
              16+ years building ventures, raising capital, and scaling operations across Africa, Europe & Australasia.
              Raised ZAR 100M+ in FDI. MBA from UCT GSB with ESADE international exchange.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" />
                Cape Town, South Africa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-amber-500" />
                mike@mearp.co
              </span>
              <a
                href="https://www.linkedin.com/in/mike-earp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-amber-500" />
                linkedin.com/in/mike-earp
              </a>
            </div>
          </div>

          {/* Target roles summary */}
          <div className="glass-card p-6 md:min-w-[280px]">
            <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">Target Roles</h3>
            <ul className="space-y-2">
              {['MD / CEO / COO', 'Head of Development', 'Country / Regional Manager', 'Board / NED Positions'].map((role) => (
                <li key={role} className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                  {role}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Target Sectors</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Sports & Leisure', 'Hospitality', 'Real Estate', 'Emerging Markets'].map((sector) => (
                  <span key={sector} className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
