'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { getStoredConsent, OPEN_CONSENT_EVENT, storeConsent, type ConsentChoice } from '@/lib/cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getStoredConsent() === null)

    const open = () => setVisible(true)
    window.addEventListener(OPEN_CONSENT_EVENT, open)

    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open)
  }, [])

  const choose = (choice: ConsentChoice) => {
    storeConsent(choice)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-3xl border border-green-800 bg-green-950 p-6 shadow-2xl shadow-green-950/30 sm:bottom-6 sm:p-7"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-green-400">Cookies</p>
              <p className="text-sm leading-7 text-green-100/80">
                We use analytics cookies to understand how visitors use our site and improve it. You can accept or decline, and change your choice at any time.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:w-40">
              <button
                type="button"
                onClick={() => choose('granted')}
                className="rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-400"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => choose('denied')}
                className="rounded-full border border-green-700 px-5 py-3 text-sm font-bold text-green-100 transition-colors hover:border-green-400 hover:text-white"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
