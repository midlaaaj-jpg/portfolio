import { Briefcase, BookOpen, TrendingUp, Code2, CheckCircle2, User, Sparkles } from 'lucide-react'

import { personalInfo, coreValues } from '../data/portfolioData'

const iconMap = {
  Briefcase,
  BookOpen,
  TrendingUp,
  Code2
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200/50 dark:border-indigo-800/60 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Building Modern Web Experiences with Passion & Purpose
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Narrative & Developer Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Visual Profile Highlight Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative glass-card rounded-2xl p-6 sm:p-8 overflow-hidden glow-on-hover">
              {/* Code window mock header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">developer-profile.ts</span>
              </div>

              {/* Code-style info preview */}
              <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <span className="text-purple-600 dark:text-purple-400">const</span> developer = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-cyan-400">name</span>: <span className="text-emerald-600 dark:text-emerald-400">'{personalInfo.name}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-cyan-400">role</span>: <span className="text-emerald-600 dark:text-emerald-400">'{personalInfo.role}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-cyan-400">frontendMilestone</span>: <span className="text-amber-600 dark:text-amber-400">'Completed'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-cyan-400">currentGoal</span>: <span className="text-emerald-600 dark:text-emerald-400">'Full Stack Mastery'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-600 dark:text-cyan-400">readyToWork</span>: <span className="text-indigo-600 dark:text-indigo-400">true</span>,
                </p>
                <p>{'}'};</p>
              </div>

              {/* Status callout inside card */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Growth Mindset
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Ready to contribute to real-world engineering teams
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Hi there! I'm <span className="text-indigo-600 dark:text-cyan-400">{personalInfo.name}</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              I am an aspiring full-stack developer who has completed my frontend learning with technologies like 
              <strong className="text-slate-900 dark:text-white font-semibold"> HTML5, CSS3, JavaScript, React, </strong> 
              and <strong className="text-slate-900 dark:text-white font-semibold">Tailwind CSS</strong>.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              With a solid frontend foundation in place, I am actively continuing toward full-stack development, 
              focusing on expanding my programming depth, problem-solving skills, and architectural understanding. 
              I enjoy turning complex wireframes into intuitive, responsive, and performant web interfaces.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              As an entry-level candidate, I bring exceptional curiosity, high attention to detail, and a relentless 
              drive to learn alongside experienced engineering teams.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Frontend Completed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" /> Full-Stack in Progress
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" /> Entry-Level Ready
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars / Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((item) => {
            const IconComponent = iconMap[item.icon] || Code2
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 glow-on-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-4 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
