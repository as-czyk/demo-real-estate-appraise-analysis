import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Info, Clock, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ReviewHeaderProps {
  analysisId: string;
}

export function ReviewHeader({ analysisId }: ReviewHeaderProps) {
  // Mock data - in real app this would come from API/database
  const stats = {
    blockingErrors: 3,
    infoErrors: 7,
    executionTime: "4:40 min",
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Analyse-Prüfung</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Detaillierte Überprüfung der Gutachten-Analyse
            </p>
          </div>
          <Badge variant="outline" className="gap-1.5 text-xs font-mono">
            <FileText className="h-3 w-3" />
            {analysisId}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
              <AlertCircle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Blockierende Fehler
              </p>
              <p className="text-2xl font-bold">{stats.blockingErrors}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/10">
              <Info className="h-5 w-5 text-chart-1" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Info-Hinweise</p>
              <p className="text-2xl font-bold">{stats.infoErrors}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
              <Clock className="h-5 w-5 text-chart-3" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ausführungszeit</p>
              <p className="text-2xl font-bold">{stats.executionTime}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
