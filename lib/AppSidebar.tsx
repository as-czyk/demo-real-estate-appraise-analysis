import { Activity, BarChart, CloudUpload, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import agentenschmiede from "@/public/logo_agentenschmiede.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
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
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
            Logo
          </div>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2">
          <Link href="https://agentenschmiede.com" target="_blank">
            <Image
              src={agentenschmiede}
              alt="Agentenschmiede"
              width={45}
              height={45}
            />
          </Link>
          <small>
            by{" "}
            <Link href="https://agentenschmiede.com" target="_blank">
              agentenschmiede
            </Link>
          </small>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
