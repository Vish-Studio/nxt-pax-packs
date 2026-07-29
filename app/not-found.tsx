import Link from 'next/link'

const navLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'About', href: '/#about' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Testimonials', href: '/#testimonials' },
]

const productLinks = ['Bio Carry Bags', 'Eco Cups & Lids', 'Mailer Packaging', 'Food Containers']

export default function NotFound() {
  return (
    <div className="min-h-svh bg-green-950 text-white">
      <header className="border-b border-white/10 bg-green-950 px-6 lg:px-10">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="PaxPacks" className="h-9 w-9 rounded-full object-cover" loading="eager" decoding="async" />
            <span className="text-lg font-bold tracking-tight text-white">PaxPacks</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="text-sm font-medium text-white/75 transition hover:text-green-400">
                {label}
              </Link>
            ))}
          </nav>

          <a href="tel:+6512345678" className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500">
            Call Now
          </a>
        </div>
      </header>

      <main className="relative isolate overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(94,194,71,0.22),transparent_32%),linear-gradient(135deg,#071a04_0%,#0e3008_52%,#071a04_100%)]" />

        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-green-400">404 error</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              This packaging route is missing.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-green-100/75">
              The page may have moved, but you can still browse biodegradable bags, cups, mailers, and takeaway containers for your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-400">
                Back to Home
              </Link>
              <a href="tel:+6512345678" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Call for Pricing
              </a>
            </div>
          </div>

          <div className="border-y border-white/15 py-6 lg:border-l lg:border-y-0 lg:py-0 lg:pl-7">
            <p className="text-sm font-semibold text-green-200">Looking for products?</p>
            <div className="mt-6 grid gap-4">
              {productLinks.map((item) => (
                <Link key={item} href="/#products" className="border-t border-white/15 pt-4 text-sm text-green-100/75 transition first:border-t-0 first:pt-0 hover:text-green-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-950 px-6 py-10 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-green-900 pb-8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="PaxPacks" className="h-9 w-9 rounded-full object-cover" loading="lazy" decoding="async" />
              <div>
                <span className="block font-bold text-white">PaxPacks</span>
                <span className="text-xs text-green-500">Bio packaging supply</span>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-green-100/70">
              Biodegradable bags, cups, mailers, and takeaway containers for businesses replacing everyday plastic packaging.
            </p>
          </div>

          <div className="grid gap-8 border-b border-green-900 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Products</p>
              <nav className="grid gap-3">
                {productLinks.map((label) => (
                  <Link key={label} href="/#products" className="text-sm text-green-100/70 transition-colors hover:text-green-300">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Company</p>
              <nav className="grid gap-3">
                {navLinks.map(({ label, href }) => (
                  <Link key={label} href={href} className="text-sm text-green-100/70 transition-colors hover:text-green-300">
                    {label}
                  </Link>
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
          </div>

          <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs font-medium leading-6 text-green-700">
              © 2026 PaxPacks. All rights reserved. | Website by{' '}
              <a href="https://www.vish.studio" target="_blank" rel="noopener" className="text-green-400 transition hover:text-green-300">
                Vish Studio
              </a>
            </p>

            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-green-700">
              <Link href="/#products" className="transition-colors hover:text-green-400">Products</Link>
              <Link href="/#contact" className="transition-colors hover:text-green-400">Contact</Link>
              <a href="https://www.vish.studio" target="_blank" rel="noopener" className="transition-colors hover:text-green-400">Credits</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
