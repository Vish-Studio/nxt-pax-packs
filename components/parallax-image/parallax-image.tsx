'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ImageWithFallback } from '@/components/image-with-fallback/image-with-fallback'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  speed?: number
  ariaHidden?: boolean
  loading?: 'eager' | 'lazy'
}

export function ParallaxImage({ src, alt, className, imageClassName, speed = 64, ariaHidden, loading = 'lazy' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed])

  return (
    <div ref={ref} className={className}>
      <motion.div className="absolute inset-x-0 -inset-y-16" style={{ y }}>
        <ImageWithFallback
          src={src}
          alt={alt}
          aria-hidden={ariaHidden}
          loading={loading}
          className={`h-full w-full object-cover ${imageClassName ?? ''}`}
        />
      </motion.div>
    </div>
  )
}

