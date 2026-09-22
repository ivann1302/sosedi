"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type MobileMenuProps = {
  navLinks: readonly { label: string; href: string }[];
  ctaHref: string;
  ctaLabel: string;
  desktopBreakpoint: number;
};

export function MobileMenu({ navLinks, ctaHref, ctaLabel, desktopBreakpoint }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setOpen(false);
    buttonRef.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!open) return;

    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const previousInert = background.map((element) => element.inert);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    background.forEach((element) => { element.inert = true; });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus({ preventScroll: true });
      }
      if (event.key !== "Tab") return;
      const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("nav a");
      const lastLink = links?.[links.length - 1];
      if (event.shiftKey && document.activeElement === buttonRef.current) {
        event.preventDefault();
        lastLink?.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        buttonRef.current?.focus();
      }
    }

    const desktop = window.matchMedia(`(min-width: ${desktopBreakpoint}px)`);
    function handleResize(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open, desktopBreakpoint]);

  return (
    <div className="site-header__mobile-menu" data-open={open} ref={menuRef}>
      <button
        type="button"
        ref={buttonRef}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <nav id={panelId} aria-label="Мобильная навигация" aria-hidden={!open} inert={!open}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link className="button button--primary" href={ctaHref} onClick={closeMenu}>
          {ctaLabel}
        </Link>
      </nav>
    </div>
  );
}
