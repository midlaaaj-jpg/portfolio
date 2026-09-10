import { useState } from 'react'
import { Mail, Send, Check, Copy, AlertCircle, MessageSquare } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { personalInfo } from '../data/portfolioData'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Validation function
  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name'
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters long'
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long'
    }

    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate frontend form submission with realistic delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    }, 1000)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200/50 dark:border-indigo-800/60 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Connect & Build Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
            I am actively seeking entry-level developer roles, collaborations, and learning opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Details
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to reach out directly via email, check my repositories on GitHub, or send a message using the form.
              </p>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">GitHub Profile</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.githubUsername}
                    </p>
                  </div>
                </div>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm transition-colors"
                >
                  Visit
                </a>
              </div>

              {/* Quick Status Pill */}
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  Currently available for full-time junior / entry-level developer positions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm sm:text-base">
                    Your message has been sent successfully. I will get back to you promptly at your provided email!
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm text-indigo-600 dark:text-cyan-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-cyan-400 focus:ring-indigo-500/20 dark:focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-cyan-400 focus:ring-indigo-500/20 dark:focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Midlaj, I came across your portfolio and would like to connect regarding an opportunity..."
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-cyan-400 focus:ring-indigo-500/20 dark:focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 disabled:opacity-70 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Minimal Bottom Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
