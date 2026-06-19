import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Tiến Thuận · Junior AI Engineer",
  description:
    "Junior AI Engineer and Software Engineering student at FPT University, focused on full-stack web, computer vision research, and AI-integrated products.",
  openGraph: {
    title: "Nguyễn Tiến Thuận · Junior AI Engineer",
    description:
      "Portfolio of Nguyễn Tiến Thuận: full-stack web, computer vision research, Azure AI coursework, and selected software projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${beVietnam.variable} ${jetBrainsMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
