"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const readyClassName = "reveal-ready";
const visibleClassName = "is-revealed";
const revealSelector = "[data-reveal]";

function isTargetInViewport(target: HTMLElement) {
  const rect = target.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top <= viewportHeight * 0.92 && rect.bottom >= viewportHeight * 0.08;
}

function getHashRevealTargets() {
  const hash = window.location.hash;
  const revealTargets = new Set<HTMLElement>();

  if (!hash.startsWith("#")) {
    return revealTargets;
  }

  const hashElement = document.getElementById(hash.slice(1));

  if (!hashElement) {
    return revealTargets;
  }

  if (hashElement.matches(revealSelector)) {
    revealTargets.add(hashElement);
  }

  hashElement
    .querySelectorAll<HTMLElement>(revealSelector)
    .forEach((target) => revealTargets.add(target));

  return revealTargets;
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const trackedTargets = new WeakSet<HTMLElement>();

    root.classList.add(readyClassName);

    const observer =
      reducedMotion || !("IntersectionObserver" in window)
        ? null
        : new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  return;
                }

                entry.target.classList.add(visibleClassName);
                observer?.unobserve(entry.target);
              });
            },
            {
              rootMargin: "0px 0px -14% 0px",
              threshold: 0.12,
            },
          );

    const prepareTarget = (target: HTMLElement) => {
      if (trackedTargets.has(target)) {
        return;
      }

      if (target.classList.contains(visibleClassName)) {
        trackedTargets.add(target);
        return;
      }

      const hashRevealTargets = getHashRevealTargets();

      if (
        !observer ||
        hashRevealTargets.has(target) ||
        isTargetInViewport(target)
      ) {
        target.classList.add(visibleClassName);
        trackedTargets.add(target);
        return;
      }

      observer.observe(target);
      trackedTargets.add(target);
    };

    const prepareTargets = (scope: ParentNode) => {
      if (scope instanceof HTMLElement && scope.matches(revealSelector)) {
        prepareTarget(scope);
      }

      scope
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((target) => prepareTarget(target));
    };

    prepareTargets(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            prepareTargets(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
