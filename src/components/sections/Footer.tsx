import { Reveal } from '../reveal/Reveal'

interface FooterProps {
  logoSrc: string
  links: Array<{ label: string; href: string }>
}

export function Footer({ logoSrc, links }: FooterProps) {
  const productLinks = ['Bio Carry Bags', 'Eco Cups & Lids', 'Mailer Packaging', 'Food Containers']

  return (
    <footer className="bg-green-950 px-6 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="border-b border-green-900 pb-8" y={16}>
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="PaxPacks" className="h-9 w-9 rounded-full object-cover" loading="lazy" decoding="async" />
            <div>
              <span className="block font-bold text-white">PaxPacks</span>
              <span className="text-xs text-green-500">Bio packaging supply</span>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-green-100/70">
            Biodegradable bags, cups, mailers, and takeaway containers for businesses replacing everyday plastic packaging.
          </p>
        </Reveal>

        <Reveal className="grid gap-8 border-b border-green-900 py-8 sm:grid-cols-2 lg:grid-cols-4" delay={0.08} y={16}>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Products</p>
            <nav className="grid gap-3">
              {productLinks.map((label) => (
                <a key={label} href="#products" className="text-sm text-green-100/70 transition-colors hover:text-green-300">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Company</p>
            <nav className="grid gap-3">
              {links.map(({ label, href }) => (
                <a key={label} href={href} className="text-sm text-green-100/70 transition-colors hover:text-green-300">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Contact</p>
            <div className="grid gap-3 text-sm text-green-100/70">
              <a href="tel:+6512345678" className="transition-colors hover:text-green-300">+65 1234 5678</a>
              <a href="mailto:hello@paxpacks.com" className="transition-colors hover:text-green-300">hello@paxpacks.com</a>
              <span>Singapore HQ</span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Ready to switch?</p>
            <a href="tel:+6512345678" className="block rounded-full bg-green-500 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-green-400">
              Call for Pricing
            </a>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between" delay={0.12} y={16}>
          <p className="max-w-sm text-xs font-medium leading-6 text-green-700">
            © 2026 PaxPacks. All rights reserved. | Website by{' '}
            <a href="https://www.vish.studio" target="_blank" rel="noopener" className="text-green-400 transition-colors hover:text-green-300">
              Vish Studio
            </a>
          </p>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-green-700">
            <a href="#products" className="transition-colors hover:text-green-400">Products</a>
            <a href="#contact" className="transition-colors hover:text-green-400">Contact</a>
            <a href="https://www.vish.studio" target="_blank" rel="noopener" className="transition-colors hover:text-green-400">Credits</a>
          </nav>
        </Reveal>
      </div>
    </footer>
  )
}
