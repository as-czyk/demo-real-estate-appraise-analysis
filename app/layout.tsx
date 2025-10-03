import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/lib/AppSidebar";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
