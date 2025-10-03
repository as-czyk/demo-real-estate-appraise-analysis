"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Loader2, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Rule {
  id: string;
  title: string;
  severity: "blocking" | "info";
}

const rules: Rule[] = [
  { id: "R1", title: "Rechtschreibe und Grammatikfehler", severity: "info" },
  {
    id: "R2",
    title: "Unterschrift und Stempel des Gutachters fehlen",
    severity: "blocking",
  },
  {
    id: "R3",
    title: "Wertermittlungsstichtag nicht vorhanden",
    severity: "blocking",
  },
  {
    id: "R4",
    title: "Name und Adresse des Auftraggebers ist nicht korrekt",
    severity: "blocking",
  },
  { id: "R5", title: "Grundbuchauszug nicht vorhanden", severity: "blocking" },
  {
    id: "R6",
    title:
      "Stichtag der Bodenrichtwerte passt nicht zum Wertermittlungsstichtag",
    severity: "blocking",
  },
];

interface AnalysisProgressProps {
  appraisalType: string;
  onComplete: () => void;
}

export function AnalysisProgress({
  appraisalType,
  onComplete,
}: AnalysisProgressProps) {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(-1);
  const [completedRules, setCompletedRules] = useState<Set<number>>(new Set());
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentRuleIndex < rules.length) {
      const timer = setTimeout(() => {
        if (currentRuleIndex >= 0) {
          setCompletedRules((prev) => new Set([...prev, currentRuleIndex]));
        }
        setCurrentRuleIndex((prev) => prev + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else if (currentRuleIndex === rules.length) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 500);

      const finalTimer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(finalTimer);
      };
    }
  }, [currentRuleIndex, onComplete]);

  const getAppraisalTypeName = (type: string) => {
    const types: Record<string, string> = {
      verkehrswertgutachten: "Verkehrswertgutachten",
      kurzgutachten: "Kurzgutachten",
      wertgutachten: "Wertgutachten",
    };
    return types[type] || type;
  };

  return (
    <div
      className={cn(
        "animate-in fade-in slide-in-from-top-4 duration-500",
        isExiting && "animate-out fade-out slide-out-to-bottom-4 duration-300"
      )}
    >
      <Card>
        <CardHeader>
          <CardTitle>Analyse läuft</CardTitle>
          <CardDescription>
            Prüfregeln werden auf {getAppraisalTypeName(appraisalType)}{" "}
            angewendet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-chart-1" />
                <div>
                  <p className="font-medium">Fortschritt</p>
                  <p className="text-sm text-muted-foreground">
                    {completedRules.size} von {rules.length} Regeln geprüft
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-chart-1/10 text-chart-1 border-chart-1/20"
              >
                {Math.round((completedRules.size / rules.length) * 100)}%
              </Badge>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Prüfregeln
              </p>
              <div className="space-y-2">
                {rules.map((rule, index) => {
                  const isCompleted = completedRules.has(index);
                  const isCurrent = currentRuleIndex === index;
                  const isPending = index > currentRuleIndex;

                  return (
                    <div
                      key={rule.id}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border p-3 transition-all",
                        isCompleted && "border-green-500/20 bg-green-500/5",
                        isCurrent && "border-chart-1/50 bg-chart-1/5",
                        isPending && "border-border bg-background"
                      )}
                    >
                      <div className="flex-shrink-0">
                        {isCompleted && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                        {isCurrent && (
                          <Loader2 className="h-5 w-5 animate-spin text-chart-1" />
                        )}
                        {isPending && (
                          <Circle className="h-5 w-5 text-muted-foreground/50" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={cn(
                            "text-sm font-medium truncate",
                            isPending && "text-muted-foreground"
                          )}
                        >
                          {rule.title}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          "flex-shrink-0",
                          rule.severity === "blocking"
                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        )}
                      >
                        {rule.severity === "blocking" ? (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <Info className="mr-1 h-3 w-3" />
                        )}
                        {rule.severity === "blocking" ? "Blockierend" : "Info"}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
