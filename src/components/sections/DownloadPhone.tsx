"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import phoneImage from "@/assets/images/download/phone-img.webp";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const smoothStep = (value: number) => value * value * (3 - 2 * value);

function getPhoneVisibility(progress: number, isMobile: boolean) {
  const revealEnd = isMobile ? 0.58 : 0.3;
  const hideStart = isMobile ? 0.76 : 0.68;

  if (progress <= revealEnd) {
    return smoothStep(clamp(progress / revealEnd, 0, 1));
  }

  if (progress >= hideStart) {
    return 1 - smoothStep(clamp((progress - hideStart) / (1 - hideStart), 0, 1));
  }

  return 1;
}

export function DownloadPhone() {
  const phoneWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phoneWrap = phoneWrapRef.current;
    const section = phoneWrap?.closest<HTMLElement>(".download-app");
    const visual = phoneWrap?.closest<HTMLElement>(".download-app__visual");

    if (!phoneWrap || !section || !visual) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const updatePhonePosition = () => {
      if (reducedMotion) {
        section.style.setProperty("--download-phone-x", "0px");
        section.style.setProperty("--download-phone-rotate", "0deg");
        frameId = 0;
        return;
      }

      const visualRect = visual.getBoundingClientRect();
      const phoneRect = phoneWrap.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 560;
      const progress = clamp(
        (viewportHeight - visualRect.top) /
          (viewportHeight + visualRect.height),
        0,
        1,
      );
      const visibility = getPhoneVisibility(progress, isMobile);
      const hiddenOffset = -(phoneRect.right + 32);
      const offset = hiddenOffset * (1 - visibility);
      const rotate = -5 * (1 - visibility);

      section.style.setProperty("--download-phone-x", `${offset}px`);
      section.style.setProperty("--download-phone-rotate", `${rotate}deg`);
      frameId = 0;
    };

    const requestPhonePositionUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updatePhonePosition);
    };

    requestPhonePositionUpdate();
    window.addEventListener("scroll", requestPhonePositionUpdate, { passive: true });
    window.addEventListener("resize", requestPhonePositionUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestPhonePositionUpdate);
      window.removeEventListener("resize", requestPhonePositionUpdate);
    };
  }, []);

  return (
    <div className="download-app__phone-wrap" ref={phoneWrapRef}>
      <Image
        src={phoneImage}
        alt=""
        sizes="(max-width: 560px) 74vw, (max-width: 920px) 46vw, 390px"
        className="download-app__phone"
      />
    </div>
  );
}
