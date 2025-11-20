import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Workflow, Sparkles, Layout, LineChart, Bot } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Deploy intelligent agents and workflows that execute with precision and scale.'
  },
  {
    icon: Cpu,
    title: 'Creative Engineering',
    desc: 'Build advanced interfaces and systems where design meets deep tech.'
  },
  {
    icon: Layout,
    title: 'UX & Human-Machine Design',
    desc: 'Minimal, ergonomic experiences refined for clarity, speed, and trust.'
  },
  {
    icon: LineChart,
    title: 'Data Intelligence',
    desc: 'Leverage analytics and ML pipelines to surface signal and drive impact.'
  },
  {
    icon: Sparkles,
    title: 'Digital Strategy',
    desc: 'Align brand, product, and automation to accelerate your roadmap.'
  },
  {
    icon: Workflow,
    title: 'Workflow Optimization',
    desc: 'Streamline operations with resilient, automated processes end-to-end.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Solutions, engineered with restraint</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.06)] ring-1 ring-inset ring-slate-200/80 hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
