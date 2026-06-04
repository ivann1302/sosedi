import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Соседи — шеринг вещей в вашем районе",
  description:
    "Соседи помогает брать нужные вещи рядом, экономить на редких покупках и делиться с людьми из своего района.",
  openGraph: {
    title: "Соседи — шеринг вещей в вашем районе",
    description:
      "Берите вещи у соседей, экономьте бюджет и живите в стиле осознанного потребления.",
    type: "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
