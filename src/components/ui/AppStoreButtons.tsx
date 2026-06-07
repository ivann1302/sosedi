const appStores = [
  {
    href: "#download",
    icon: "app-store",
    name: "App Store",
    prefix: "Скачать в",
  },
  {
    href: "#download",
    icon: "google-play",
    name: "Google Play",
    prefix: "Доступно в",
  },
  {
    href: "#download",
    icon: "rustore",
    name: "RuStore",
    prefix: "Скачать в",
  },
] as const;

type StoreIconName = (typeof appStores)[number]["icon"];

function StoreIcon({ name }: { name: StoreIconName }) {
  if (name === "app-store") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z"
        />
      </svg>
    );
  }

  if (name === "google-play") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="#00f076"
          d="M3.4 2.1C3.15 2.36 3 2.76 3 3.27v17.46c0 .51.15.91.4 1.17l.06.05 9.78-9.78v-.23L3.46 2.05l-.06.05Z"
        />
        <path
          fill="#ffc900"
          d="m16.5 15.43-3.26-3.26v-.23l3.26-3.26.07.04 3.86 2.2c1.1.63 1.1 1.66 0 2.29l-3.86 2.2-.07.02Z"
        />
        <path
          fill="#00a0ff"
          d="m16.57 15.39-3.33-3.33L3.4 21.9c.38.4 1.02.45 1.75.04l11.42-6.55Z"
        />
        <path
          fill="#ff3a44"
          d="M16.57 8.61 5.15 2.06c-.73-.42-1.37-.36-1.75.04l9.84 9.84 3.33-3.33Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" fill="#0077ff" rx="6" />
      <rect width="4" height="12" x="6" y="6" fill="#ffffff" rx="2" />
      <rect width="4" height="16" x="10" y="4" fill="#ffffff" rx="2" />
      <rect width="4" height="12" x="14" y="6" fill="#ffffff" rx="2" />
    </svg>
  );
}

export function AppStoreButtons() {
  return (
    <>
      {appStores.map((store) => (
        <a
          className="store-button"
          href={store.href}
          key={store.name}
          aria-label={`${store.prefix} ${store.name}`}
        >
          <span className="store-button__mark" aria-hidden="true">
            <StoreIcon name={store.icon} />
          </span>
          <span className="store-button__text">
            <span>{store.prefix}</span>
            <strong>{store.name}</strong>
          </span>
        </a>
      ))}
    </>
  );
}
