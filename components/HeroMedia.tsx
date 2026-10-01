"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { OfficialMedia } from "./OfficialMedia";

/** Replaceable H01/H02 slot. The official gallery image is the default until a separately approved asset is supplied. */
export function HeroMedia({ videoSrc, posterSrc, mobilePosterSrc }: {
  videoSrc?: string;
  posterSrc?: string;
  mobilePosterSrc?: string;
}) {
  const slot = useRef<HTMLDivElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (!videoSrc || !posterSrc) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 701px)");
    const observer = new IntersectionObserver(([entry]) => {
      setPlayVideo(entry.isIntersecting && desktop.matches && !motion.matches);
    }, { rootMargin: "200px" });
    if (slot.current) observer.observe(slot.current);
    const stop = () => setPlayVideo(false);
    motion.addEventListener("change", stop);
    desktop.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", stop);
      desktop.removeEventListener("change", stop);
    };
  }, [videoSrc, posterSrc]);
  return <div className="hero-art-slot" data-media-slot="H01 desktop / H02 mobile" ref={slot}>
    <OfficialMedia kind="aquamarine" label="Aquamarine earrings shown in Yvonne Ross Jewellery’s official bespoke gallery" priority />
    {posterSrc && <Image className="hero-poster" src={posterSrc} alt="Yvonne Ross Jewellery hero photograph" fill sizes="100vw" priority />}
    {mobilePosterSrc && <Image className="hero-mobile-poster" src={mobilePosterSrc} alt="Yvonne Ross Jewellery hero photograph" fill sizes="100vw" priority />}
    {playVideo && videoSrc && posterSrc && <video className="hero-video" src={videoSrc} poster={posterSrc} autoPlay loop muted playsInline preload="none" aria-hidden="true" />}
  </div>;
}
