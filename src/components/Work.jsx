import React from 'react'
import { motion } from 'framer-motion'

const work = [
  { title: 'Autonomous Support System' },
  { title: 'Predictive UX Framework' },
  { title: 'Realtime Ops Dashboard' },
  { title: 'Cognitive Search Surface' },
  { title: 'Agentic Workflow Suite' },
  { title: 'Privacy-first Analytics' },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Selected Work</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] ring-1 ring-inset ring-slate-200"
            >
              <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_120%,rgba(2,132,199,0.08),transparent_60%)] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full items-end">
                <div className="text-slate-900">
                  <div className="text-sm text-slate-500">Case Study</div>
                  <div className="text-lg font-semibold">{w.title}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
