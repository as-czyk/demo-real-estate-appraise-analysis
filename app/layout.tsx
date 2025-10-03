import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/lib/AppSidebar";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const soraFont = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Immobiliengutachten Analyse",
  description: "KI-gestützte Analyse von Immobiliengutachten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${soraFont.variable} antialiased font-sora`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
