'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { CONSENT_CHANGE_EVENT, CONSENT_STORAGE_KEY, type ConsentChoice } from '@/lib/cookie-consent'
import { ensureGtag, GA_MEASUREMENT_ID, trackEvent } from '@/lib/analytics'

function getLocation(element: Element) {
  const section = element.closest('section[id]')
  if (section) return section.id
  if (element.closest('nav')) return 'nav'
  if (element.closest('footer')) return 'footer'
  if (element.closest('header')) return 'header'
  return 'page'
}

function handleClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest('a[href]')
  if (!link) return

  const href = link.getAttribute('href') ?? ''
  const location = getLocation(link)
  const label = link.textContent?.trim().slice(0, 80) ?? ''

  if (href.startsWith('tel:')) {
    trackEvent('phone_click', { location, label })
  } else if (href.startsWith('mailto:')) {
    trackEvent('email_click', { location, label })
  } else if (/^https?:\/\//.test(href) && new URL(href).host !== window.location.host) {
    trackEvent('outbound_click', { location, label, url: href })
  } else if (href.startsWith('#') && href.length > 1) {
    trackEvent('nav_click', { location, target: href.slice(1) })
  }
}

export function Analytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const onConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<ConsentChoice>).detail
      ensureGtag()('consent', 'update', {
        analytics_storage: choice,
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }

    const seen = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target.id)) continue
          seen.add(entry.target.id)
          trackEvent('section_view', { section: entry.target.id })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.4 },
    )
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))

    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange)
      document.removeEventListener('click', handleClick)
      observer.disconnect()
    }
  }, [])

  if (!GA_MEASUREMENT_ID) return null

  // Consent defaults to denied; a previously stored "granted" choice is applied before config runs.
  const init = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    var stored = null;
    try { stored = window.localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)}); } catch (e) {}
    gtag('consent', 'default', {
      analytics_storage: stored === 'granted' ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    gtag('js', new Date());
    gtag('config', ${JSON.stringify(GA_MEASUREMENT_ID)});
  `

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {init}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
    </>
  )
}
