import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_20%,rgba(148,163,184,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Precise. Modern. Autonomous.</h2>
            <p className="mt-4 text-slate-600">
              We are a high-precision studio engineering AI-driven systems and premium digital products. Our mission is simple: blend human-centered design with advanced automation to create seamless, resilient experiences.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl bg-gradient-to-br from-white to-slate-50 p-10 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-inset ring-slate-200">
              <div className="grid grid-cols-6 gap-3 opacity-90">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="h-2 rounded-full bg-slate-200/80" />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
