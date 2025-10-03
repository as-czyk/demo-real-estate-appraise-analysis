"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", gutachten: 38, vorjahr: 32 },
  { month: "Feb", gutachten: 42, vorjahr: 38 },
  { month: "Mär", gutachten: 45, vorjahr: 41 },
  { month: "Apr", gutachten: 51, vorjahr: 45 },
  { month: "Mai", gutachten: 48, vorjahr: 47 },
  { month: "Jun", gutachten: 52, vorjahr: 49 },
  { month: "Jul", gutachten: 55, vorjahr: 51 },
  { month: "Aug", gutachten: 49, vorjahr: 48 },
  { month: "Sep", gutachten: 53, vorjahr: 50 },
  { month: "Okt", gutachten: 58, vorjahr: 52 },
  { month: "Nov", gutachten: 54, vorjahr: 51 },
  { month: "Dez", gutachten: 47, vorjahr: 45 },
];

export function AppraisalChart() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Gutachten im Jahresverlauf</CardTitle>
        <CardDescription>
          Vergleich der analysierten Gutachten zum Vorjahr
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            gutachten: {
              label: "Dieses Jahr",
              color: "hsl(var(--chart-1))",
            },
            vorjahr: {
              label: "Vorjahr",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px] w-full"
        >
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGutachten" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gutachten)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gutachten)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorVorjahr" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-vorjahr)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-vorjahr)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="month"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="vorjahr"
              stroke="var(--color-vorjahr)"
              fillOpacity={1}
              fill="url(#colorVorjahr)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="gutachten"
              stroke="var(--color-gutachten)"
              fillOpacity={1}
              fill="url(#colorGutachten)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
