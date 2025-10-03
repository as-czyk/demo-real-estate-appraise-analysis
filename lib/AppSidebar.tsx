import { Activity, BarChart, CloudUpload, Home } from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { routes } from "./routes";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: routes.dashboard,
    icon: Home,
  },
  {
    title: "Analyse",
    url: routes.analyse,
    icon: Activity,
  },
  {
    title: "Regeln",
    url: routes.regeln,
    icon: CloudUpload,
  },
  {
    title: "Review",
    url: routes.review,
    icon: BarChart,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-3 p-4">
          <Image
            src="/heid_logo.png"
            alt="Heid Logo"
            width={64}
            height={64}
            className="rounded"
          />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-4">
                <span>Logout</span>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
