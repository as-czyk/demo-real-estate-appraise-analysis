"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, Info, ExternalLink } from "lucide-react";

interface Finding {
  id: string;
  severity: "blocking" | "info";
  title: string;
  description: string;
  page: number;
}

const mockFindings: Finding[] = [
  {
    id: "1",
    severity: "blocking",
    title: "Fehlende Unterschrift",
    description:
      "Die KI hat festgestellt, dass auf Seite 3 die erforderliche Unterschrift des Gutachters fehlt. Dies ist ein kritischer Mangel, der die Gültigkeit des Gutachtens beeinträchtigt.",
    page: 3,
  },
  {
    id: "2",
    severity: "blocking",
    title: "Unvollständige Objektbeschreibung",
    description:
      "Die Objektbeschreibung auf Seite 5 ist unvollständig. Wichtige Details wie Baujahr, Wohnfläche und Grundstücksgröße fehlen oder sind nicht korrekt angegeben.",
    page: 5,
  },
  {
    id: "3",
    severity: "info",
    title: "Formatierungsfehler",
    description:
      "Auf Seite 2 wurden kleinere Formatierungsfehler in der Tabellenstruktur erkannt. Dies beeinträchtigt die Lesbarkeit, ist aber nicht kritisch.",
    page: 2,
  },
  {
    id: "4",
    severity: "blocking",
    title: "Fehlende Vergleichsobjekte",
    description:
      "Die Vergleichswertanalyse auf Seite 8 enthält weniger als die erforderlichen drei Vergleichsobjekte. Dies ist für die Bewertung zwingend erforderlich.",
    page: 8,
  },
  {
    id: "5",
    severity: "info",
    title: "Veraltete Marktdaten",
    description:
      "Die verwendeten Marktdaten auf Seite 6 sind älter als 6 Monate. Es wird empfohlen, aktuellere Daten zu verwenden.",
    page: 6,
  },
  {
    id: "6",
    severity: "info",
    title: "Rechtschreibfehler",
    description:
      "Auf Seite 4 wurden mehrere Rechtschreibfehler identifiziert. Diese sollten korrigiert werden, um die Professionalität des Gutachtens zu gewährleisten.",
    page: 4,
  },
  {
    id: "7",
    severity: "info",
    title: "Unklare Formulierung",
    description:
      "Die Formulierung der Wertermittlung auf Seite 9 ist nicht eindeutig. Eine präzisere Ausdrucksweise würde die Verständlichkeit verbessern.",
    page: 9,
  },
  {
    id: "8",
    severity: "info",
    title: "Fehlende Bildunterschriften",
    description:
      "Die Fotos auf Seite 7 haben keine oder unvollständige Bildunterschriften. Dies erschwert die Zuordnung der Bilder zum beschriebenen Objekt.",
    page: 7,
  },
  {
    id: "9",
    severity: "info",
    title: "Inkonsistente Nummerierung",
    description:
      "Die Nummerierung der Abschnitte ist auf Seite 10 inkonsistent. Eine durchgängige Nummerierung würde die Navigation erleichtern.",
    page: 10,
  },
  {
    id: "10",
    severity: "info",
    title: "Fehlende Quellenangaben",
    description:
      "Auf Seite 11 werden externe Daten verwendet, aber die Quellen sind nicht angegeben. Quellenangaben erhöhen die Nachvollziehbarkeit.",
    page: 11,
  },
];

const severityConfig = {
  blocking: {
    icon: AlertCircle,
    color: "bg-destructive/10 text-destructive border-destructive/20",
    label: "Blockierend",
  },
  info: {
    icon: Info,
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
    label: "Info",
  },
};

export function FindingsList() {
  const handleJumpToPage = (page: number) => {
    console.log("[v0] Jump to page:", page);
    // This will be implemented to sync with PDF viewer
  };

  return (
    <Card className="border-border/50 flex flex-col">
      <CardHeader className="border-b border-border/50 p-4">
        <CardTitle className="text-lg">Gefundene Probleme</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[calc(100vh-280px)]">
          <div className="space-y-4 p-4">
            {mockFindings.map((finding) => {
              const config = severityConfig[finding.severity];
              const Icon = config.icon;

              return (
                <div
                  key={finding.id}
                  className="space-y-2 rounded-lg border border-border/50 p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <Badge
                      variant="outline"
                      className={`${config.color} gap-1.5`}
                    >
                      <Icon className="h-3 w-3" />
                      {config.label}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1 text-xs"
                      onClick={() => handleJumpToPage(finding.page)}
                    >
                      Seite {finding.page}
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                  <h3 className="font-semibold leading-tight">
                    {finding.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {finding.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
