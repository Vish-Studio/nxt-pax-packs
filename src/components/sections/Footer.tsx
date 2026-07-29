import { Reveal } from '../reveal/Reveal'

interface FooterProps {
  logoSrc: string
  links: Array<{ label: string; href: string }>
}

export function Footer({ logoSrc, links }: FooterProps) {
  return (
    <footer className="bg-green-950 px-6 py-10 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-green-900 pt-8 sm:pt-10">
        <Reveal className="mb-8 flex items-center gap-3 sm:mb-10" y={16}>
          <img src={logoSrc} alt="PaxPacks" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-bold text-white">PaxPacks</span>
          <span className="text-xs text-green-700">Packaging Solutions</span>
        </Reveal>

        <Reveal className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between" delay={0.08} y={16}>
          <p className="max-w-sm text-xs font-semibold leading-6 text-green-700 sm:max-w-none sm:uppercase sm:tracking-[0.3em]">
            © 2026 PaxPacks. All rights reserved. | Website by{' '}
            <a href="https://www.vish.studio" target="_blank" rel="noopener" className="text-green-400 transition-colors hover:text-green-300">
              Vish Studio
            </a>
          </p>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-[0.22em] sm:flex sm:flex-wrap sm:gap-x-10 sm:tracking-[0.3em]">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="text-green-700 transition-colors hover:text-green-400">
                {label}
              </a>
            ))}
          </nav>
        </Reveal>
      </div>
    </footer>
  )
}
