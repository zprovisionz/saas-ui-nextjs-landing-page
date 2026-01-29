import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIRE Clip Machine - AI Repurposing for Personal Finance Podcasters",
  description:
    "Turn your FIRE podcast episodes into compliant, authoritative shorts, X threads, LinkedIn carousels, and quote graphics - built for serious creators.",
  keywords: [
    "FIRE",
    "podcast repurposing",
    "personal finance",
    "content creation",
    "AI",
    "financial independence",
    "retire early",
  ],
  openGraph: {
    title: "FIRE Clip Machine - AI Repurposing for Personal Finance Podcasters",
    description:
      "Turn your FIRE podcast episodes into compliant, authoritative shorts, X threads, LinkedIn carousels, and quote graphics - built for serious creators.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRE Clip Machine - AI Repurposing for Personal Finance Podcasters",
    description:
      "Turn your FIRE podcast episodes into compliant, authoritative shorts, X threads, LinkedIn carousels, and quote graphics - built for serious creators.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
