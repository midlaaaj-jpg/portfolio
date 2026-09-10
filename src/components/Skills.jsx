import { 
  FileCode2, 
  Palette, 
  Braces, 
  Atom, 
  Wind, 
  CheckSquare, 
  GitBranch, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react'
import { skillsData } from '../data/portfolioData'

// Icon mapping dictionary
const iconComponents = {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Wind,
  CheckSquare,
  GitBranch
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200/50 dark:border-indigo-800/60 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technologies & Tools I Work With
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
            A focused frontend foundation with modern JavaScript, component-driven UI architecture, and version control.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill) => {
            const Icon = iconComponents[skill.iconName] || Layers
            return (
              <div
                key={skill.name}
                className="group relative glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-cyan-500/30 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Category Badge */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-13 h-13 rounded-xl p-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Category */}
                  <p className="text-xs font-mono font-medium text-indigo-600 dark:text-cyan-400 mb-3">
                    {skill.category}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom decorative progress line */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                    Active Stack
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">Frontend</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Journey Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-l-indigo-600 dark:border-l-cyan-400">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Currently Continuing Toward Full-Stack
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Actively exploring Node.js, Express, REST APIs, and database fundamentals to become a well-rounded software engineer.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-indigo-700 dark:text-cyan-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
            >
              Discuss Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
