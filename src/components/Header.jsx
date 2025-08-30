import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-600 transition-colors group-hover:from-neutral-800 group-hover:to-neutral-500" />
          <span className="text-lg font-semibold tracking-tight">Sillion</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-neutral-700 hover:text-neutral-900">Features</a>
          <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900">Security</a>
          <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900">Docs</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">Request a demo</a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200/70 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            <a onClick={() => setOpen(false)} href="#features" className="py-2 text-sm text-neutral-700 hover:text-neutral-900">Features</a>
            <a onClick={() => setOpen(false)} href="#" className="py-2 text-sm text-neutral-700 hover:text-neutral-900">Security</a>
            <a onClick={() => setOpen(false)} href="#" className="py-2 text-sm text-neutral-700 hover:text-neutral-900">Docs</a>
            <a onClick={() => setOpen(false)} href="#contact" className="mt-2 rounded-full bg-neutral-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-neutral-800">Request a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
