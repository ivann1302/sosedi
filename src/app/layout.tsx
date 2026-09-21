import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "«Всё рядом» — шеринг вещей в вашем районе",
  description:
    "«Всё рядом» помогает брать нужные вещи рядом, экономить на редких покупках и делиться с людьми из своего района.",
  openGraph: {
    title: "«Всё рядом» — шеринг вещей в вашем районе",
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
      <body>
        <a className="skip-link" href="#main-content">
          К содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
