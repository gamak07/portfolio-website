'use client'

import { useEffect, useRef } from 'react'
import { incrementView } from '@/lib/actions/analytics'

export default function ViewTracker({ slug }: { slug: string }) {
  const hasViewed = useRef(false)

  useEffect(() => {
    if (!hasViewed.current) {
      incrementView(slug)
      hasViewed.current = true
    }
  }, [slug])

  return null
}