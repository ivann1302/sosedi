const drawings = {
  arrow: <path d="M7 25 25 7M9 7h16v16" />,
  search: <><circle cx="14" cy="14" r="8" /><path d="m20 20 7 7" /></>,
  pin: <path fill="currentColor" stroke="none" fillRule="evenodd" d="M16 2C9.9 2 5 6.8 5 12.7 5 20.1 16 30 16 30s11-9.9 11-17.3C27 6.8 22.1 2 16 2Zm0 5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />,
  coins: <><ellipse cx="12" cy="7" rx="8" ry="3.5" /><path d="M4 7v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V7M4 13v6c0 2 3.6 3.5 8 3.5M4 19v6c0 2 3.6 3.5 8 3.5" /><ellipse cx="22" cy="19" rx="7" ry="3.5" /><path d="M15 19v6c0 2 3 3.5 7 3.5s7-1.5 7-3.5v-6" /></>,
  leaf: <><path d="M9 24C-1 10 13 4 28 4c0 16-5 28-18 21M5 29 22 11" /></>,
  box: <><path d="m16 3 12 7v14l-12 6L4 24V10L16 3ZM4 10l12 7 12-7M16 17v13M10 6l12 7v6" /><path d="M9 16v4" /></>,
  cycle: <><path d="M5 17A11 11 0 0 1 24 8M23 3l2 6-6 1M27 15A11 11 0 0 1 8 24M9 29l-2-6 6-1" /></>,
  check: <path d="m7 16 6 6L26 8" />,
};

type BrandIconProps = {
  name: keyof typeof drawings;
  className?: string;
};

export function BrandIcon({ name, className }: BrandIconProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {drawings[name]}
    </svg>
  );
}
