import { FileCheck2 } from "lucide-react";

export function RulesHeader() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 border-2 border-primary/20">
        <FileCheck2 className="h-8 w-8 text-primary" />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          Prüfregeln
        </h1>
        <p className="text-muted-foreground">
          Übersicht aller Regeln zur Gutachtenprüfung
        </p>
      </div>
    </div>
  );
}
