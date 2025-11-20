import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative bg-white">
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
        >
          Let’s Build the Future Together
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-transform duration-200 hover:translate-y-[-1px]"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
