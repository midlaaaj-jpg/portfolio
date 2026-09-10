import { useState, useEffect } from 'react'
import { ArrowRight, Mail, FolderGit2, Send } from 'lucide-react'
import GithubIcon from './GithubIcon'
import InstagramIcon from './InstagramIcon'
import { personalInfo, typingRoles } from '../data/portfolioData'



export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = typingRoles[roleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText.length + 1 === currentRole.length) {
          // Pause when word complete
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting backward
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % typingRoles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-50/90 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/60 shadow-sm mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Large Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] sm:leading-tight mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subtitle with Animated Dynamic Typing */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200 flex items-center">
            <span>I am a </span>
            <span className="ml-2 font-mono text-indigo-600 dark:text-cyan-400 font-bold border-b-2 border-indigo-500/30 dark:border-cyan-400/30">
              {displayText}
            </span>
            <span className="animate-cursor text-indigo-600 dark:text-cyan-400">|</span>
          </p>
        </div>

        {/* Short Professional Introduction */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          {personalInfo.heroIntroduction}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base group"
          >
            <FolderGit2 className="w-5 h-5 text-cyan-200 group-hover:scale-110 transition-transform" />
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <Send className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social / Quick Contact Links */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center gap-6">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
            title="Muhammed Midlaj GitHub Profile"
          >
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <GithubIcon className="w-4 h-4" />
            </div>
            <span>{personalInfo.githubUsername}</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-300 transition-colors"
            title="Send email to Muhammed Midlaj"
          >
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <Mail className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">{personalInfo.email}</span>
            <span className="sm:hidden">Email</span>
          </a>

          <a
            href={personalInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            title="Muhammed Midlaj Instagram Profile"
          >
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <InstagramIcon className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">@{personalInfo.instagramUsername}</span>
            <span className="sm:hidden">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
