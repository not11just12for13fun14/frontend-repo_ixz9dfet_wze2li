import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Subtle background particles */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.35] [background:radial-gradient(1px_1px_at_20px_20px,rgba(2,6,23,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-sm tracking-widest text-slate-500">DISCRUPT</div>
          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#capabilities" className="hover:text-slate-900">Capabilities</a>
            <a href="#work" className="hover:text-slate-900">Work</a>
          </nav>
          <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white">Start</a>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <Work />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
