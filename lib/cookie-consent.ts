export type ConsentChoice = 'granted' | 'denied'

export const CONSENT_STORAGE_KEY = 'paxpacks-cookie-consent'
export const OPEN_CONSENT_EVENT = 'paxpacks:open-cookie-consent'
export const CONSENT_CHANGE_EVENT = 'paxpacks:cookie-consent-change'

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function storeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Storage unavailable; the choice only applies to this page view.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }))
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
}
