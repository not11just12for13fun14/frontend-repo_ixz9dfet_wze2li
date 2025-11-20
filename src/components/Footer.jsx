import React from 'react'
import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Discrupt Agency</div>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Twitter" className="hover:text-slate-700"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-slate-700"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-slate-700"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
