import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "每日照顧簿簿｜180 個自我覺察小練習",
  description: "每日留幾分鐘俾自己，在 180 個小練習之中重新連結內心。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}
