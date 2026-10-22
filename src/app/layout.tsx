import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/global.scss";
import "../styles/typography.scss";

export const metadata: Metadata = {
  title: "Андрей Лебедев",
  description: "Портфолио фронтенд-разработчика Андрея Лебедева",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
