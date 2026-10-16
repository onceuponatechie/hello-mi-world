"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      lerp: 0.12,
      anchors: true,
      stopInertiaOnNavigate: true,
      allowNestedScroll: true,
      respectReducedMotion: true,
      syncTouch: false,
      virtualScroll: ({ event, deltaX, deltaY }) => !event.shiftKey && Math.abs(deltaY) >= Math.abs(deltaX),
    });
    return () => lenis.destroy();
  }, []);
  return null;
}
