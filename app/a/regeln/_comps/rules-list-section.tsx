import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Info } from "lucide-react";

type Severity = "blocking" | "info";

interface Rule {
  id: string;
  title: string;
  description: string;
  severity: Severity;
}

const rules: Rule[] = [
  {
    id: "R001",
    title: "Rechtschreibe und Grammatikfehler",
    description:
      "Als Prüfverantwortlicher möchte ich den gesamten Fließtext eines Gutachtens auf Grammatik-, Rechtschreib- und Zeichensetzungsfehler automatisiert prüfen, sodass sprachliche Qualität, Professionalität und Lesbarkeit sichergestellt sind.",
    severity: "info",
  },
  {
    id: "R002",
    title: "Unterschrift und Stempel des Gutachters fehlen",
    description:
      "Als Prüfverantwortlicher möchte ich automatisch prüfen, ob das Gutachten eine Unterschrift und einen Stempel des Gutachters enthält, sodass die formalen Anforderungen an die Dokumentation erfüllt sind und das Gutachten als abgeschlossen gilt.",
    severity: "blocking",
  },
  {
    id: "R003",
    title: "Wertermittlungsstichtag nicht vorhanden",
    description:
      "Als Prüfverantwortlicher möchte ich automatisiert prüfen, ob alle drei relevanten Stichtage – Wertermittlungsstichtag, Ortstermin und Qualitätsstichtag – im Gutachten genannt sind, sodass die zeitliche Einordnung und formale Vollständigkeit des Gutachtens gewährleistet ist.",
    severity: "blocking",
  },
  {
    id: "R004",
    title: "Name und Adresse des Auftraggebers ist nicht korrekt",
    description:
      "Als Prüfverantwortlicher möchte ich automatisiert prüfen, ob der korrekte Name und die korrekte Adresse des Auftraggebers im Gutachten enthalten sind, sodass formale Richtigkeit, Transparenz und rechtliche Korrektheit im Dokument sichergestellt sind.",
    severity: "blocking",
  },
  {
    id: "R005",
    title: "Grundbuchauszug nicht vorhanden",
    description:
      "Als Prüfverantwortlicher möchte ich automatisiert prüfen, ob ein Grundbuchauszug im Gutachten enthalten ist, sodass sichergestellt ist, dass ein zentrales Dokument zur rechtlichen Grundstückssituation vorliegt.",
    severity: "blocking",
  },
  {
    id: "R006",
    title:
      "Stichtag der Bodenrichtwerte passt nicht zum Wertermittlungsstichtag",
    description:
      "Als Prüfverantwortlicher möchte ich automatisch erkennen, ob der Stichtag der Bodenrichtwerte vom Wertermittlungsstichtag abweicht (YTD), sodass eine bewusste Entscheidung des Gutachters erforderlich wird und potenzielle Inkonsistenzen transparent gemacht werden.",
    severity: "blocking",
  },
];

const severityConfig = {
  blocking: {
    label: "Blockierend",
    icon: AlertCircle,
    badgeClass:
      "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20",
    iconClass: "text-destructive",
  },
  info: {
    label: "Info",
    icon: Info,
    badgeClass:
      "bg-chart-1/10 text-chart-1 border-chart-1/20 hover:bg-chart-1/20",
    iconClass: "text-chart-1",
  },
};

export function RulesListSection() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Alle Prüfregeln</h2>
        <p className="text-sm text-muted-foreground">
          Detaillierte Übersicht aller verfügbaren Prüfregeln
        </p>
      </div>
      <div className="grid gap-4">
        {rules.map((rule) => {
          const config = severityConfig[rule.severity];
          const Icon = config.icon;
          return (
            <Card key={rule.id} className="border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 ${config.badgeClass}`}
                    >
                      <Icon className={`h-5 w-5 ${config.iconClass}`} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {rule.id}
                        </Badge>
                        <CardTitle className="text-base">
                          {rule.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {rule.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={`shrink-0 ${config.badgeClass}`}>
                    {config.label}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
