import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/lib/AppSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
