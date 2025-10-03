import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Clock, TrendingUp } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      title: "Analysierte Gutachten diesen Monat",
      value: "47",
      change: "+12% zum Vormonat",
      icon: FileText,
      trend: "up",
    },
    {
      title: "Analysierte Gutachten dieses Jahr",
      value: "523",
      change: "+8% zum Vorjahr",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Gefundene Fehler",
      value: "36",
      change: "+15% zum Vormonat",
      icon: AlertTriangle,
      trend: "down",
    },
    {
      title: "Durchschn. Bearbeitungszeit",
      value: "10,2 Minuten",
      change: "-1,3 Minuten zum Vormonat",
      icon: Clock,
      trend: "down",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.trend === "up" ? "text-chart-3" : "text-chart-1"
                }`}
              >
                {stat.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
