import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "maplibre-gl/dist/maplibre-gl.css";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { locales } from "~/shared/config/i18n";
import { Providers } from "../_providers";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
