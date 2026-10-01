"use client";

import dynamic from "next/dynamic";

const StudioMap = dynamic(() => import("./StudioMap"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map…</div>,
});

export default function LazyStudioMap() {
  return <StudioMap />;
}
