import { useMemo } from 'react'

interface NavBarProps {
  scrolled: boolean
  menuOpen: boolean
  onMenuToggle: () => void
  onMenuClose: () => void
  logoSrc: string
  links: Array<{ label: string; href: string }>
}

export function NavBar({ scrolled, menuOpen, onMenuToggle, onMenuClose, logoSrc, links }: NavBarProps) {
  const navClasses = useMemo(() => (scrolled ? 'text-green-800' : 'text-white/90'), [scrolled])
  const brandClasses = menuOpen || !scrolled ? 'text-white' : 'text-green-900'
  const menuLineClasses = menuOpen || !scrolled ? 'bg-white' : 'bg-green-900'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled && !menuOpen ? 'bg-white shadow-[0_1px_0_0_#e5e7eb]' : 'bg-transparent'}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between" style={{ height: 72 }}>
        <a href="#" className="flex items-center gap-3 group">
          <img src={logoSrc} alt="PaxPacks" className="h-9 w-9 rounded-full object-cover" loading="eager" decoding="async" />
          <span className={`font-bold text-lg tracking-tight transition-colors ${brandClasses}`}>PaxPacks</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className={`text-sm font-medium transition-colors hover:text-green-500 ${navClasses}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+6512345678" className={`text-sm font-medium transition-colors ${scrolled ? 'text-green-700' : 'text-white/80'}`}>
            +65 1234 5678
          </a>
          <a href="tel:+6512345678" className="bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Call Now
          </a>
        </div>

        <button className="md:hidden p-2" onClick={onMenuToggle} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          <div className="space-y-1.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all ${menuLineClasses} ${i === 0 && menuOpen ? 'rotate-45 translate-y-2' : ''} ${i === 1 && menuOpen ? 'opacity-0' : ''} ${i === 2 && menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            ))}
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 md:hidden bg-green-950 px-6 pb-8 pt-28">
          <div className="flex h-full flex-col justify-between">
            <nav className="space-y-6">
              {links.map(({ label, href }) => (
                <a key={label} href={href} className="block border-b border-white/10 pb-5 text-4xl font-semibold leading-none text-white" onClick={onMenuClose}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <a href="tel:+6512345678" className="block rounded-full bg-green-500 px-6 py-4 text-center text-sm font-semibold text-white" onClick={onMenuClose}>
                Call +65 1234 5678
              </a>
              <a href="mailto:hello@paxpacks.com" className="block text-center text-sm font-medium text-green-200" onClick={onMenuClose}>
                hello@paxpacks.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
