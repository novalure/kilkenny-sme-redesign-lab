"use client";

import { useRef } from "react";
import { Artwork } from "@/components/Artwork";
import { pieces } from "@/lib/yvonne";

export function JewelleryReel() {
  const reel = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    const element = reel.current;
    if (!element) return;
    element.scrollBy({
      left: direction * Math.min(element.clientWidth * 0.76, 630),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    window.dispatchEvent(
      new CustomEvent("yvonne-analytics", {
        detail: { event: "jewellery_reel_interaction", direction },
      }),
    );
  }
  return (
    <div className="reel-shell">
      <div className="reel-controls" aria-label="Jewellery reel controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous pieces">
          <span aria-hidden="true">PREV</span>
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next pieces">
          <span aria-hidden="true">NEXT</span>
        </button>
      </div>
      <div className="jewellery-reel" ref={reel} aria-label="Selected jewellery">
        {pieces.map((piece, index) => (
          <article className="reel-piece" key={piece.name}>
            <a
              className="reel-visual"
              href={piece.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${piece.name} on Yvonne Ross's official shop`}
              data-event="product_enquiry_click"
            >
              <Artwork
                kind={piece.art}
                label={`Abstract concept visual for ${piece.name}; actual product photograph on the official shop`}
              />
              <span className="reel-view">View piece <span aria-hidden="true">&gt;</span></span>
            </a>
            <div className="reel-meta">
              <span className="index">0{index + 1} / {piece.category}</span>
              <h3>{piece.name}</h3>
              <p>{piece.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="reel-disclosure">Abstract concept visuals. See the official listings for actual product photography and availability.</p>
    </div>
  );
}
