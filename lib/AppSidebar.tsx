import { Activity, BarChart, Home, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import agentenschmiede from "@/public/logo_agentenschmiede.png";
import { Logo } from "@/components/Logo";

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
    icon: RulerIcon,
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
          <Logo logoName="company-logo.png" width={64} height={64} />
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
