'use client'

import { useState } from 'react'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
}

export function ImageWithFallback({ src, alt, fallback, className, loading = 'lazy', decoding = 'async', ...props }: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false)

  return (
    <img
      src={errored ? (fallback ?? '') : src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={() => setErrored(true)}
      {...props}
    />
  )
}

