"use client"

import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { useVideo } from "./video-context"

export function DashboardPreview() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { videoRef: contextVideoRef } = useVideo()
  const isInView = useInView(videoRef, { once: false, amount: 0.3 })

  // Sync ref with context
  useEffect(() => {
    if (contextVideoRef && videoRef.current) {
      // Assign the video element to the context ref
      contextVideoRef.current = videoRef.current
    }
  }, [contextVideoRef])

  // Play/pause based on viewport visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Auto-play might be blocked by browser
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-[hsl(25,100%,65%)]/50 rounded-2xl p-2 shadow-2xl">
        <video
          ref={videoRef}
          src="/vidoe.webm"
          loop
          muted
          playsInline
          className="w-full h-[550px] object-fill rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
