'use client'

import { useState } from 'react'

interface Slide {
  src: string
  caption?: string
}

interface SlideshowProps {
  slides: Slide[]
}

export default function Slideshow({ slides }: SlideshowProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <div className="relative select-none">
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '3/2' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.src}
          alt={slide.caption ?? ''}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 transition-opacity p-2"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white opacity-60 hover:opacity-100 transition-opacity p-2"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="absolute bottom-2 right-3 text-white text-xs opacity-60">
          {current + 1}/{slides.length}
        </div>
      </div>
      {slide.caption && (
        <p className="text-center text-xs text-gray-500 mt-2 px-4">{slide.caption}</p>
      )}
    </div>
  )
}
