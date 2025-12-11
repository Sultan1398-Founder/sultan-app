"use client"

import React, { createContext, useContext, useRef, useState, ReactNode } from "react"

interface VideoContextType {
  videoRef: React.RefObject<HTMLVideoElement | null>
  isPlaying: boolean
  playVideo: () => void
  pauseVideo: () => void
}

const defaultVideoRef = React.createRef<HTMLVideoElement | null>()

const VideoContext = createContext<VideoContextType>({
  videoRef: defaultVideoRef,
  isPlaying: false,
  playVideo: () => {},
  pauseVideo: () => {},
})

export function VideoProvider({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Auto-play might be blocked
      })
    }
  }

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <VideoContext.Provider value={{ videoRef, isPlaying, playVideo, pauseVideo }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo() {
  return useContext(VideoContext)
}

