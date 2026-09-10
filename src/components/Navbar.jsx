import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import { personalInfo, navLinks } from '../data/portfolioData'


export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section spy
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 shadow-sm dark:shadow-slate-950/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Profile Avatar & Name */}
        <a
          href="#home"
          className="group flex items-center gap-3 font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white transition-transform hover:scale-[1.02]"
          aria-label="Midlaj Portfolio Home"
        >
          {/* Profile Picture */}
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-full p-[2px] bg-gradient-to-tr from-indigo-600 via-purple-500 to-cyan-400 shadow-md shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all flex-shrink-0">
            <img
              src={profileImg}
              alt={personalInfo.name}
              className="h-full w-full rounded-full object-cover bg-slate-800"
            />
          </div>
          <span className="font-extrabold tracking-tight">
            {personalInfo.shortName}
            <span className="text-indigo-600 dark:text-cyan-400">.</span>
            <span className="text-xs font-mono font-normal ml-1.5 px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50 hidden sm:inline-block">
              dev
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                  isActive
                    ? 'text-indigo-600 dark:text-cyan-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Action Controls (Theme Toggle & CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Dark/Light Mode Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            type="button"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 hover:border-indigo-300 dark:hover:border-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] p-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-cyan-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
