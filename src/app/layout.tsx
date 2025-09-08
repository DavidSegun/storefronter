import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${
      process.env.NEXT_PUBLIC_SITE_NAME ||
      "Container Entsorgung Shop"
    }`,
    default:
      process.env.NEXT_PUBLIC_SITE_NAME ||
      "Container Entsorgung Shop",
  },
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Container Entsorgung Shop",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  alternates: {
    languages: {
      "x-default": process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${poppins.className} antialiased bg-primary text-secondary relative`}
      >
        {children}
      </body>
    </html>
  )
}
