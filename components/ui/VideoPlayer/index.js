"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoPlayer({
  src,
  poster,
  alt = "",
  aspect = "aspect-video",
  className = "",
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden bg-mafad-navy ${aspect} ${className}`}
    >
      {showVideo ? (
        <video
          className="w-full h-full object-cover"
          controls
          autoPlay
          preload="none"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <>
          <Image
            src={poster}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <button
            onClick={() => setShowVideo(true)}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
          >
            <span className="w-16 h-16 rounded-full bg-mafad-cyan flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play
                className="w-7 h-7 text-mafad-navy ml-1"
                fill="currentColor"
              />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
