import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import { HighlightInit } from "@highlight-run/next/client";


const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <HighlightInit 
      projectId="ve6p6rgp"
      serviceName="my-nextjs-frontend"
      tracingOrigins
      networkRecording={{
        enabled: true,
        recordHeadersAndBody: true,
        urlBlocklist: []
      }}
    />
    <html lang="en">
      <body className={merriweather.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
    </>
  );
}
