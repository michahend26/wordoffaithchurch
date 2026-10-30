import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Word of Faith Church | People With a Purpose",
    template: "%s | Word of Faith Church"
  },
  description:
    "Connect with Word of Faith Church. Discover our ministries, watch messages, explore Scripture, and find ways to get involved.",
  applicationName: "Word of Faith Church",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Word of Faith"
  }
};

export const viewport: Viewport = {
  themeColor: "#b99a54",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}