import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', desc: 'Signal mapping, opportunity framing, and model selection.' },
  { title: 'Design', desc: 'System architecture, interface primitives, and prototyping.' },
  { title: 'Deploy', desc: 'Pipelines, evaluation loops, and observability baked-in.' },
  { title: 'Scale', desc: 'Iterate, optimize, and extend—securely and reliably.' },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-white">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-12 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Capabilities</h2>

        <div className="relative">
          {/* thin lines */}
          <div className="pointer-events-none absolute left-3 right-3 top-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6 ring-1 ring-inset ring-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">{i + 1}</div>
                <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
