import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/lib/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex h-screen w-screen overflow-hidden">
          <nav className="h-full flex-shrink-0">
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          </nav>
          <section className="flex-1 h-full w-full overflow-auto p-8">
            <div className="flex justify-start w-full">
              <div className="space-y-6 w-full">{children}</div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
