import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WelloraFit – Sustainable Weight Loss, Simplified",
  description: "WelloraFit is an integrated health, nutrition & fitness ecosystem. Doctor-led, nutrition-powered, fitness-strengthened, lifestyle-sustained.",
  keywords: "weight loss, health, nutrition, fitness, doctor consultation, lifestyle coaching, WelloraFit",
  openGraph: {
    title: "WelloraFit – Sustainable Weight Loss, Simplified",
    description: "An integrated health, nutrition & fitness ecosystem where medical expertise, nutrition, fitness, and lifestyle management come together.",
    url: "https://www.wellorafit.com",
    siteName: "WelloraFit",
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
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
