import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { getMessages } from "next-intl/server";


export const metadata: Metadata = {
  title: 'Sultan',
  description: 'SummitAI is a platform for AI-powered development.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages();


  let locale = "ar";
  try {
    const cookieStore = await cookies();
    locale = cookieStore.get("NEXT_LOCALE")?.value || "ar";
  } catch (error) {
    // During static generation, cookies are not available
    console.log("Using default locale during static generation");
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={``}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Analytics />

        </NextIntlClientProvider>

      </body>
    </html>
  )
}
