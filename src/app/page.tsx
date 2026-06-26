'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Code2, Palette, Zap, Monitor, Layers, Globe, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const projects = [
  {
    title: 'Nexus Finance',
    category: 'Webflow Development',
    description: 'Complete website redesign for a $12M-funded fintech platform. Responsive, CMS-powered, 98 Lighthouse score.',
    tags: ['Webflow', 'CMS', 'Responsive', 'Animations'],
    color: 'from-indigo-500/20 to-purple-500/20',
    metrics: '3.2x conversion lift',
  },
  {
    title: 'AeroStack AI',
    category: 'Website & Brand',
    description: 'Marketing site for an AI infrastructure startup. Built with Webflow + custom interactions, launched in 2 weeks.',
    tags: ['Webflow', 'Figma to Web', 'Motion', 'SEO'],
    color: 'from-emerald-500/20 to-teal-500/20',
    metrics: '45% lower bounce rate',
  },
  {
    title: 'Collaborate HQ',
    category: 'Product Website',
    description: 'SaaS product site with complex CMS architecture, multi-language support, and blog system for a 500K+ user platform.',
    tags: ['Webflow', 'CMS Architecture', 'i18n', 'Performance'],
    color: 'from-orange-500/20 to-rose-500/20',
    metrics: '2.8s → 0.9s load time',
  },
  {
    title: 'Verdant Health',
    category: 'Responsive Redesign',
    description: 'Mobile-first redesign of a health-tech platform serving 200K users. Rebuilt on Webflow with custom interactions.',
    tags: ['Mobile-First', 'Webflow', 'UI/UX', 'A/B Testing'],
    color: 'from-sky-500/20 to-blue-500/20',
    metrics: '67% mobile engagement ↑',
  },
]

const services = [
  { icon: Monitor, title: 'Webflow Development', desc: 'Pixel-perfect builds from Figma to Webflow with CMS, interactions, and responsive design.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Core Web Vitals, lazy loading, image optimization, and sub-second load times.' },
  { icon: Palette, title: 'Responsive Design', desc: 'Mobile-first approach ensuring flawless experiences across all devices and breakpoints.' },
  { icon: Code2, title: 'Custom Interactions', desc: 'GSAP, Lottie, and Webflow native interactions that bring designs to life.' },
  { icon: Layers, title: 'CMS Architecture', desc: 'Scalable content structures, dynamic filtering, and multi-reference fields.' },
  { icon: Globe, title: 'SEO & Accessibility', desc: 'Semantic HTML, structured data, ARIA labels, and search-engine-ready architecture.' },
]

const stats = [
  { number: '50+', label: 'Webflow Sites Shipped' },
  { number: '98', label: 'Avg. Lighthouse Score' },
  { number: '3x', label: 'Avg. Conversion Lift' },
  { number: '<2wk', label: 'Typical Turnaround' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            <span className="gradient-text">TBB</span>
            <span className="text-muted text-sm ml-2 font-normal">Studio</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-8"
          >
            <a href="#work" className="text-sm text-muted hover:text-primary transition-colors">Work</a>
            <a href="#services" className="text-sm text-muted hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm text-muted hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105">
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted mb-6 font-medium">
              Webflow Developer & Design Engineer
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
              I build websites
              <br />
              that <span className="gradient-text">perform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-12">
              Expert Webflow development for funded startups. Pixel-perfect, responsive, 
              performance-optimized sites that convert visitors into customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#work" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl">
              View My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full text-sm font-medium hover:border-gray-400 transition-all hover:scale-105">
              My Services
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-muted" />
        </motion.div>

        {/* Background gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text">{stat.number}</p>
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted mb-4 font-medium">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sites built to ship,<br />
              <span className="text-muted">not just to look good.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative"
              >
                <div className={`rounded-2xl p-8 md:p-10 bg-gradient-to-br ${project.color} border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-medium">{project.category}</p>
                      <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/60 text-gray-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-indigo-600">{project.metrics}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300 mb-4 font-medium">What I Deliver</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              End-to-end Webflow expertise,<br />
              <span className="text-gray-400">from design to deployment.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Process Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted mb-4 font-medium">How I Work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Design-led development,<br />
                <span className="text-muted">shipped fast.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                I don&apos;t just build websites — I partner with design teams to bring their vision to life with precision. 
                Every interaction, every responsive breakpoint, every CMS field is intentional.
                My process ensures zero round-tripping between design and development.
              </p>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Design Review', desc: 'I analyze your Figma files, identify interaction opportunities, and plan the build.' },
                  { step: '02', title: 'Webflow Build', desc: 'Pixel-perfect implementation with clean class structure and scalable CMS.' },
                  { step: '03', title: 'Optimize & Ship', desc: 'Performance audit, responsive QA across all devices, and smooth handoff.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 1}
                    className="flex gap-4"
                  >
                    <span className="text-sm font-bold text-indigo-500 mt-0.5">{item.step}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-10 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-sm font-medium">Webflow Expert — 5+ years</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-indigo-400" />
                    <span className="text-sm font-medium">Figma → Webflow in &lt;48hrs</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-purple-400" />
                    <span className="text-sm font-medium">CMS, Interactions, Custom Code</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-orange-400" />
                    <span className="text-sm font-medium">Responsive across all breakpoints</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="text-sm font-medium">SEO & Performance optimized</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/80 rounded-xl border border-indigo-100">
                  <p className="text-xs text-muted mb-1">Availability</p>
                  <p className="font-semibold text-sm">Ready for ongoing support — 20+ hrs/week</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <p className="text-6xl mb-8">&ldquo;</p>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 tracking-tight">
              Working with this dev was seamless. They took our Figma comps and delivered 
              a Webflow site that exceeded expectations — on time, responsive, and fast.
            </blockquote>
            <p className="text-muted">
              <span className="font-semibold text-primary">Sarah Chen</span> — Head of Design, NexusPay
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s build something<br />
              <span className="gradient-text">exceptional together.</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
              Available for ongoing Webflow development support. I integrate seamlessly 
              with design teams and deliver consistent, high-quality work every week.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:tobias@example.com" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-xl">
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://github.com/TobiasBoscoBrown" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full text-sm font-medium hover:border-gray-400 transition-all hover:scale-105">
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© 2024 TBB Studio. Built with precision.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/TobiasBoscoBrown" className="text-sm text-muted hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
