import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* Soft gradient haze */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_90%_80%,rgba(2,132,199,0.06),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* 3D Robot Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-[380px] w-full rounded-[24px] bg-gradient-to-br from-slate-100 to-slate-50 shadow-[0_10px_40px_rgba(15,23,42,0.08)] md:h-[540px]"
        >
          <Spline
            scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/40" />
        </motion.div>

        {/* Copy Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="mb-6 inline-flex rounded-full bg-slate-100 px-4 py-1 text-xs tracking-wide text-slate-500 ring-1 ring-inset ring-slate-200">
            FUTURE-READY AGENCY
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Discrupt Agency
          </h1>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">
            Crafting Intelligent Digital Experiences
          </p>
          <p className="mt-6 max-w-xl text-slate-500">
            “Where artificial intelligence, automation, and modern design converge to build next-generation digital solutions.”
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(2,6,23,0.18)] transition-transform duration-200 ease-out hover:translate-y-[-1px]">
              Explore Solutions
            </a>
            <a href="#capabilities" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
              View Capabilities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
