"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FileText,
  ClipboardList,
  ScrollText,
  Plus,
  AlertCircle,
  Info,
  X,
} from "lucide-react";

const allRules = [
  {
    id: "R001",
    title: "Rechtschreibe und Grammatikfehler",
    severity: "info" as const,
  },
  {
    id: "R002",
    title: "Unterschrift und Stempel des Gutachters fehlen",
    severity: "blocking" as const,
  },
  {
    id: "R003",
    title: "Wertermittlungsstichtag nicht vorhanden",
    severity: "blocking" as const,
  },
  {
    id: "R004",
    title: "Name und Adresse des Auftraggebers ist nicht korrekt",
    severity: "blocking" as const,
  },
  {
    id: "R005",
    title: "Grundbuchauszug nicht vorhanden",
    severity: "blocking" as const,
  },
  {
    id: "R006",
    title:
      "Stichtag der Bodenrichtwerte passt nicht zum Wertermittlungsstichtag",
    severity: "blocking" as const,
  },
];

const severityConfig = {
  blocking: {
    icon: AlertCircle,
    color: "text-destructive",
  },
  info: {
    icon: Info,
    color: "text-chart-1",
  },
};

const initialAppraisalTypes = [
  {
    id: "verkehrswertgutachten",
    name: "Verkehrswertgutachten",
    description:
      "Vollständiges Gutachten nach §194 BauGB für Finanzierungen und Rechtsstreitigkeiten",
    icon: FileText,
    ruleIds: ["R001", "R002", "R003", "R004", "R005", "R006"],
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  {
    id: "kurzgutachten",
    name: "Kurzgutachten",
    description: "Vereinfachtes Gutachten für schnelle Werteinschätzungen",
    icon: ClipboardList,
    ruleIds: ["R001", "R002", "R003", "R005"],
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
];

export function AppraisalTypesSection() {
  const [appraisalTypes, setAppraisalTypes] = useState(initialAppraisalTypes);
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const addRuleToType = (typeId: string, ruleId: string) => {
    setAppraisalTypes((prev) =>
      prev.map((type) =>
        type.id === typeId && !type.ruleIds.includes(ruleId)
          ? { ...type, ruleIds: [...type.ruleIds, ruleId] }
          : type
      )
    );
    setOpenDialog(null);
  };

  const removeRuleFromType = (typeId: string, ruleId: string) => {
    setAppraisalTypes((prev) =>
      prev.map((type) =>
        type.id === typeId
          ? { ...type, ruleIds: type.ruleIds.filter((id) => id !== ruleId) }
          : type
      )
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Gutachtenarten</h2>
        <p className="text-sm text-muted-foreground">
          Verschiedene Gutachtentypen mit zugeordneten Prüfregeln
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appraisalTypes.map((type) => {
          const Icon = type.icon;
          const availableRules = allRules.filter(
            (rule) => !type.ruleIds.includes(rule.id)
          );

          return (
            <Card key={type.id} className="border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 ${type.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {type.ruleIds.length} Regeln
                  </Badge>
                </div>
                <CardTitle className="text-lg">{type.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {type.ruleIds.map((ruleId) => {
                    const rule = allRules.find((r) => r.id === ruleId);
                    const SeverityIcon = rule
                      ? severityConfig[rule.severity].icon
                      : Info;
                    const severityColor = rule
                      ? severityConfig[rule.severity].color
                      : "text-muted-foreground";

                    return (
                      <Badge
                        key={ruleId}
                        variant="outline"
                        className="group font-mono text-xs pr-1 hover:bg-destructive/10 hover:border-destructive/50 transition-colors"
                      >
                        <SeverityIcon
                          className={`mr-1 h-3 w-3 ${severityColor}`}
                        />
                        {ruleId}
                        <button
                          onClick={() => removeRuleFromType(type.id, ruleId)}
                          className="ml-1 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-destructive/20 p-0.5 transition-opacity"
                          aria-label={`Regel ${ruleId} entfernen`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}
                </div>

                <Dialog
                  open={openDialog === type.id}
                  onOpenChange={(open) => setOpenDialog(open ? type.id : null)}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      disabled={availableRules.length === 0}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Regel hinzufügen
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Prüfregel hinzufügen</DialogTitle>
                      <DialogDescription>
                        Wählen Sie eine Regel aus, die zu {type.name}{" "}
                        hinzugefügt werden soll.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto">
                      {availableRules.map((rule) => {
                        const SeverityIcon = severityConfig[rule.severity].icon;
                        const severityColor =
                          severityConfig[rule.severity].color;

                        return (
                          <button
                            key={rule.id}
                            onClick={() => addRuleToType(type.id, rule.id)}
                            className="w-full text-left p-3 rounded-lg border border-border/50 hover:bg-accent hover:border-accent-foreground/20 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <SeverityIcon
                                className={`h-5 w-5 mt-0.5 ${severityColor}`}
                              />
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className="font-mono text-xs"
                                  >
                                    {rule.id}
                                  </Badge>
                                  <span className="text-sm font-medium">
                                    {rule.title}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                      {availableRules.length === 0 && (
                        <p className="text-sm text-muted-foreground text-center py-4">
                          Alle Regeln sind bereits zugeordnet.
                        </p>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
