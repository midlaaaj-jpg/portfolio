import { ExternalLink, CheckCircle, FolderGit2, Sparkles, PlusCircle } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { projectsData } from '../data/portfolioData'


export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200/50 dark:border-indigo-800/60 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Practical Builds
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
            Real-world applications built to demonstrate clean code, responsive design, and core programming principles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/40 dark:hover:border-cyan-500/40 flex flex-col justify-between"
            >
              {/* Project Card Header / Preview Area */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
                {/* Decorative floating dots/lines */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-900/80 text-indigo-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Mock UI Showcase Graphic */}
                <div className="mt-2 mb-3">
                  <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-cyan-400 mb-4">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Live Demo & GitHub */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Expandable Placeholder Card for Future Projects */}
          <div className="glass-card rounded-2xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center text-center group hover:border-indigo-400 dark:hover:border-cyan-500/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Next Project Coming Soon
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              Currently engineering full-stack applications with React, backend services, and database integration. Easily add new projects directly in <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">src/data/portfolioData.js</code>.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> In Development
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
