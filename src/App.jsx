import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ExternalLink, Download, Menu, X, Code2, Sparkles, Phone, MapPin } from 'lucide-react'
import portrait from './assets/Vaishali Photo.jpeg'
import resume from './assets/Resume.pdf'

function LinkedInMark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.18h2.97v9.56ZM6.45 7.88a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.86h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.46V9.18h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.56v5.24Z" />
    </svg>
  )
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const skills = {
  Languages: ['C', 'C++', 'JavaScript'],
  Frontend: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  Backend: ['Node.js', 'Express.js'],
  Databases: ['MongoDB', 'MySQL'],
  'Shopify Development': ['Remix', 'Shopify App Framework', 'Checkout Extensions', 'Theme Extensions', 'Discount Functions', 'GraphQL Admin API', 'Metafields'],
  'DevOps & Deployment': ['CI/CD', 'DigitalOcean', 'IONOS', 'FTP automation', 'Scheduled sync jobs'],
  'Version Control': ['Git', 'GitHub'],
}

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'ItGeeks',
    period: 'Nov 2024 – Present',
    location: 'Dewas, M.P.',
    points: [
      'Built Shopify Remix admin apps, checkout extensions, and theme extensions for merchant workflows.',
      'Developed discount functions and inventory sync jobs for pricing, stock, and product status.',
      'Automated reporting with Google Sheets and FTP, and deployed through a DigitalOcean CI/CD pipeline.',
      'Maintained React and Node.js applications across live client projects, improving UI and resolving reported bugs.',
    ],
    tags: ['Remix', 'React', 'Node.js', 'Shopify Functions', 'CI/CD', 'DigitalOcean'],
  },
  {
    role: 'Software Trainee Engineer',
    company: 'Infomaticae Technology Private Limited',
    period: 'Jul 2024 – Aug 2024',
    location: 'Kolkata (Remote Internship)',
    points: ['Assisted with frontend development and built full-stack fundamentals.'],
    tags: ['Frontend Development', 'Full Stack'],
  },
  {
    role: 'Web Designer',
    company: 'Alphawizz Technology',
    period: 'Dec 2023 – Feb 2024',
    location: 'Indore, M.P.',
    points: ['Developed creative websites, landing pages, and responsive designs.'],
    tags: ['Web Design', 'Responsive Design'],
  },
]

const projects = [
  {
    title: 'Shopify Product Personalization App',
    category: 'Shopify',
    desc: 'A Shopify theme extension and custom admin app for product customization, with metafield and line-item data used to generate production files and fulfillment emails.',
    tags: ['Shopify', 'Theme Extensions', 'Metafields', 'DigitalOcean'],
  },
  {
    title: 'Shopify Draft Order Management',
    category: 'Shopify',
    desc: 'A Remix admin app for creating and managing draft orders, with customer and tag support, a filterable order dashboard, and MySQL persistence.',
    tags: ['Remix', 'Shopify Admin API', 'MySQL', 'IONOS'],
  },
  {
    title: 'Inventory Sync Middleware',
    category: 'Shopify',
    desc: 'Scheduled jobs sync pricing, stock, and product status, manage tags, and send product reports to Google Sheets via FTP.',
    tags: ['Node.js', 'Scheduled Jobs', 'FTP', 'CI/CD'],
  },
  {
    title: 'MERN E-commerce Product Customizer',
    category: 'MERN',
    desc: 'A custom apparel storefront with live Fabric.js product customization and AI-generated image integration, with Redux Toolkit managing product, collection, and cart state.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Fabric.js', 'Redux Toolkit'],
  },
]

const education = [
  { degree: 'MCA · Master of Computer Applications', school: 'Sage University, Indore', period: 'Sep 2022 – Present', result: 'SGPA 8.2' },
  { degree: 'B.Sc. · Computer Science', school: 'Girls Degree College, Dewas', period: 'Jul 2019 – Oct 2022', result: '68%' },
]

const funFacts = [
  'Shopify apps, extensions, and discount functions',
  'Inventory sync and reporting automation',
  'CI/CD and cloud deployments',
  'Hindi and English',
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact']
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[#0b1120]/80 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-md bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          Vaishali Verma
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-cyan-300 transition">{l}</a>
            </li>
          ))}
        </ul>
        <motion.button whileHover={{ scale: 1.08, color: '#67e8f9' }} whileTap={{ scale: 0.92 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }} className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-sm text-slate-300">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block transition-all duration-300 hover:translate-x-1 hover:text-cyan-300">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 scroll-mt-20">
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="text-3xl font-bold mb-6 sm:mb-8"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default function App() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Shopify', 'MERN']
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative max-w-6xl mx-auto px-4 pt-24 pb-10 sm:pt-28 sm:pb-16 lg:pb-20 min-h-0 sm:min-h-[90vh] flex items-center overflow-hidden">
        <motion.div aria-hidden="true" className="absolute -top-24 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div aria-hidden="true" className="absolute top-40 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" animate={{ x: [0, 24, 0], y: [0, -18, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <div className="relative grid w-full items-center gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative z-10">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Open to opportunities
            </motion.span>
            <motion.h2
              variants={{ hidden: {}, show: { transition: { delayChildren: 0.35, staggerChildren: 0.055 } } }}
              initial="hidden"
              animate="show"
              aria-label="Hi, I'm Vaishali Verma"
              className="mt-6 text-4xl sm:text-5xl font-bold leading-tight"
            >
              <span aria-hidden="true">Hi, I'm </span>
              <span aria-hidden="true" className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {'Vaishali Verma'.split('').map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } } }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00a0' : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
            <p className="mt-4 text-xl text-slate-300">Full MERN  Stack Developer <span className="text-cyan-300">·</span> Shopify <span className="text-cyan-300">·</span> Remix</p>
            <p className="mt-4 max-w-2xl text-slate-400">
              I build production web apps with React, Node.js, and the MERN stack, including custom Shopify apps, checkout and theme extensions, and discount functions . Also experienced in shopify store design and CI/CD deployment automation. I enjoy creating thoughtful interfaces and building for the web.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#projects" className="px-5 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">View Projects</motion.a>
              <motion.a whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.97 }} href={resume} download="Vaishali-Verma-Resume.pdf" className="px-5 py-3 rounded-lg border border-white/20 hover:border-cyan-300 hover:text-cyan-300 transition inline-flex items-center gap-2">
                <Download size={16} /> Download Resume
              </motion.a>
            </div>
            <div className="mt-8 flex gap-4 text-slate-400">
              <a href="https://www.linkedin.com/in/vaishali-verma-231479250/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition hover:-translate-y-1 hover:text-cyan-300"><LinkedInMark /></a>
              <a href="mailto:vaishaliverma98314@gmail.com" aria-label="Email Vaishali" className="transition hover:-translate-y-1 hover:text-cyan-300"><Mail /></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.94 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <motion.div animate={{ rotate: [0, 2, 0, -2, 0], y: [0, -8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="relative aspect-[4/5] rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-400/20 via-indigo-500/10 to-fuchsia-500/20 p-3 shadow-2xl shadow-cyan-950/50">
              <div className="absolute -inset-4 rounded-[2.5rem] border border-cyan-300/10" />
              <img src={portrait} alt="Vaishali Verma" className="relative h-full w-full rounded-[1.5rem] object-cover object-center" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-slate-950/70 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">Thoughtful interfaces, built with care.</p>
                <p className="mt-1 text-xs text-cyan-200">Full Stack Developer · Shopify</p>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-5 top-12 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur">
              <span className="flex items-center gap-2 text-sm text-slate-200"><Code2 size={16} className="text-cyan-300" /> Building for the web</span>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-5 bottom-24 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur">
              <span className="flex items-center gap-2 text-sm text-slate-200"><Sparkles size={16} className="text-fuchsia-300" /> Curious by design</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* About */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-slate-400 leading-relaxed">
            Full Stack Developer with 2+ years of experience building production web apps using React, Node.js, and the MERN stack. I also build custom Shopify apps with Remix, admin workflows, checkout and theme extensions, and discount functions. My work spans live client projects, deployment automation, and CI/CD.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-3">
            {funFacts.map((f) => (
              <div key={f} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">{f}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <motion.div
              key={group} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: 'rgba(34, 211, 238, 0.45)' }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Code2 size={18} className="text-cyan-300" /> {group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6 border-l border-white/10 pl-6">
          {experience.map((e) => (
            <motion.div
              key={e.company} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-cyan-400" />
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <span className="text-xs text-slate-400">{e.period}</span>
                </div>
                <p className="text-cyan-300 text-sm">{e.company}</p>
                <p className="mt-1 text-xs text-slate-500">{e.location}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-400 list-disc list-inside">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={item.degree}
              whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.4)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-100">{item.degree}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.school}</p>
              <p className="mt-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">{item.result}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-400"><span className="text-slate-200">Languages:</span> Hindi (Full Professional Proficiency) · English (Professional Working Proficiency)</p>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <motion.button
              key={c} onClick={() => setFilter(c)}
              whileHover={{ y: -2, scale: 1.04 }} whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                filter === c ? 'bg-cyan-500 text-slate-900 border-cyan-500' : 'border-white/15 text-slate-300 hover:border-cyan-300'
              }`}
            >
              {c}
            </motion.button>
          ))}
        </div>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <motion.article
              key={p.title} layout
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.015 }} whileTap={{ scale: 0.985 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.title}</h3>
                <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-300" />
              </div>
              <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-slate-400">Feel free to reach out for any questions or opportunities.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:vaishaliverma98314@gmail.com" className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"><Mail size={18} /> vaishaliverma98314@gmail.com</a>
              <a href="tel:+919109326926" className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"><Phone size={18} /> +91 91093 26926</a>
              <span className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="shrink-0" /> Dewas, India</span>
              <a href="https://www.linkedin.com/in/vaishali-verma-231479250/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"><LinkedInMark size={18} /> linkedin.com/in/vaishali-verma-231479250</a>
            </div>
          </motion.div>
          <motion.form
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
          >
            <input required placeholder="Your name" className="w-full px-4 py-2.5 rounded-lg bg-[#0b1120] border border-white/10 focus:border-cyan-400 outline-none text-sm" />
            <input required type="email" placeholder="Your email" className="w-full px-4 py-2.5 rounded-lg bg-[#0b1120] border border-white/10 focus:border-cyan-400 outline-none text-sm" />
            <textarea required rows={4} placeholder="Your message" className="w-full px-4 py-2.5 rounded-lg bg-[#0b1120] border border-white/10 focus:border-cyan-400 outline-none text-sm" />
            <motion.button whileHover={{ y: -3, scale: 1.01, boxShadow: '0 12px 30px rgba(34, 211, 238, 0.2)' }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 350, damping: 20 }} className="w-full py-2.5 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition inline-flex items-center justify-center gap-2">
              <Sparkles size={16} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        Â© {new Date().getFullYear()} Vaishali Verma Â· Built with React, Tailwind CSS, and Framer Motion
      </footer>
    </div>
  )
}
