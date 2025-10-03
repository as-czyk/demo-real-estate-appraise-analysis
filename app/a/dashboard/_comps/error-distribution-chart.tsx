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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { kategorie: "Rechtschreib- und Grammatikfehler.", fehler: 8 },
  { kategorie: "Unterschrift und Stempel des Gutachters fehlen.", fehler: 5 },
  { kategorie: "Wertermittlungsstichtag nicht vorhanden.", fehler: 4 },
  {
    kategorie: "Name und Adresse des Auftraggebers ist nicht korrekt.",
    fehler: 3,
  },
  { kategorie: "Grundbuchauszug nicht vorhanden.", fehler: 2 },
  {
    kategorie:
      "Stichtag der Bodenrichtwerte passt nicht zum Wertermittlungsstichtag.",
    fehler: 1,
  },
];

export function ErrorDistributionChart() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Fehlerverteilung nach Kategorie</CardTitle>
        <CardDescription>Häufigste Fehlertypen in diesem Monat</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            fehler: {
              label: "Fehler",
              color: "hsl(var(--chart-4))",
            },
          }}
          className="h-[300px] w-full"
        >
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="kategorie"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="fehler"
              fill="var(--color-fehler)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
