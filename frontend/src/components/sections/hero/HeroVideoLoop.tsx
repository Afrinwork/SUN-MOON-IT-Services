"use client";

import { useRef } from "react";

/** Die ersten Sekunden des Videos zeigen ein weißes Logo – die überspringen wir, auch bei jeder Wiederholung. */
const START_SECONDS = 3;

export function HeroVideoLoop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = START_SECONDS;
    void video.play().catch(() => {});
  };

  const skipIntro = () => {
    const video = videoRef.current;
    if (video && video.currentTime < START_SECONDS) video.currentTime = START_SECONDS;
  };

  return (
    <video
      ref={videoRef}
      className="size-full object-cover object-center motion-reduce:hidden"
      src={`/videos/hero-background.mp4#t=${START_SECONDS}`}
      poster="/videos/hero-poster.webp"
      autoPlay
      muted
      playsInline
      preload="none"
      onLoadedMetadata={skipIntro}
      onEnded={restart}
    />
  );
}
