"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const StudioMap = dynamic(() => import("./StudioMap"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map…</div>,
});

export default function LazyStudioMap() {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={container}>{visible ? <StudioMap /> : <div className="map-loading">Map loads as you approach the studio section.</div>}</div>;
}
