import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeniorKart - Everything Seniors Need",
  description: "Senior care essentials and care boxes delivered with care.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
