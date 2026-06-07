import type { Metadata } from "next";
import { Golos_Text, Onest } from "next/font/google";
import "./globals.scss";

const golosText = Golos_Text({
  subsets: ["cyrillic", "latin"],
  variable: "--font-golos-text",
  weight: ["400", "500", "700", "800", "900"],
});

const onest = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-onest",
  weight: ["400", "500", "700", "800", "900"],
});

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
    <html lang="ru" className={`${golosText.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  );
}
