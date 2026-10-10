export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''

export type AnalyticsEvent =
  | 'phone_click'
  | 'email_click'
  | 'outbound_click'
  | 'nav_click'
  | 'product_select'
  | 'section_view'

type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// gtag must push the `arguments` object itself, so a rest-parameter wrapper would break it.
export function ensureGtag() {
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
  }
  return window.gtag
}

export function isAnalyticsEnabled() {
  return GA_MEASUREMENT_ID !== ''
}

export function trackEvent(name: AnalyticsEvent, params?: EventParams) {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') return
  ensureGtag()('event', name, params)
}
