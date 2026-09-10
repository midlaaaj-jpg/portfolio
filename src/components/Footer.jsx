import { ArrowUp, Mail, Terminal } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { personalInfo, navLinks } from '../data/portfolioData'


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/80 pt-16 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200/80 dark:border-slate-800/80 items-center">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-sm">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-indigo-600 dark:text-cyan-400 font-medium font-mono">
              {personalInfo.role}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Passionate entry-level developer committed to clean architecture, modern frontend UI, and full-stack engineering.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              title="Back to top"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Acknowledgement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {currentYear} <span className="font-semibold text-slate-700 dark:text-slate-300">{personalInfo.name}</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
