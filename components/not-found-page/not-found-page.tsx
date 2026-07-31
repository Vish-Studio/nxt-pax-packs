'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Footer } from '@/components/footer/footer'
import { NavBar } from '@/components/nav-bar/nav-bar'
import { assetPath } from '@/lib/site-assets'
import { NAV_LINKS } from '@/lib/site-content'

const productLinks = ['Bio Carry Bags', 'Eco Cups & Lids', 'Mailer Packaging', 'Food Containers']

export function NotFoundPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const logoSrc = assetPath('/logo.png')
  const navLinks = NAV_LINKS.map((link) => ({ ...link, href: `/${link.href}` }))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-svh bg-green-950 text-white">
      <NavBar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onMenuClose={() => setMenuOpen(false)}
        logoSrc={logoSrc}
        links={navLinks}
      />

      <main className="relative isolate overflow-hidden px-6 py-28 lg:px-10 lg:pb-24 lg:pt-36">
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

          <div className="border-y border-white/15 py-6 lg:border-y-0 lg:border-l lg:py-0 lg:pl-7">
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

      <Footer logoSrc={logoSrc} links={navLinks} />
    </div>
  )
}
