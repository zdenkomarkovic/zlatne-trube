"use client";
import { useRef, useState } from "react";

import AnimatedSection from "./AnimatedSection";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="brut-container mt-10">
      <AnimatedSection>
        <div className="md-card md-elevation-2 p-4 md:p-6">
          <h2>Video nastupi</h2>
          <div className="relative mt-4">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              src="/images/video-e5cbb7a38f73cee78cce7aad679a692d-V.mp4"
              playsInline
              muted
            />
            <div className="flex gap-3 mt-4">
              <button onClick={togglePlay} className="md-btn">
                {isPlaying ? "Pauza" : "Pusti"}
              </button>
              <button onClick={toggleMute} className="md-btn outline">
                {isMuted ? "Uključi zvuk" : "Isključi zvuk"}
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
