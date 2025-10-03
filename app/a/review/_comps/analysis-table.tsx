"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MoreHorizontal,
  Eye,
  FileText,
  ClipboardList,
  ScrollText,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Analysis {
  uuid: string;
  docName: string;
  appraisalType: "Verkehrswertgutachten" | "Kurzgutachten" | "Wertgutachten";
  date: string;
  status: "completed" | "in-progress" | "error";
}

const mockAnalyses: Analysis[] = [
  {
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    docName: "Einfamilienhaus_Musterstraße_12.pdf",
    appraisalType: "Verkehrswertgutachten",
    date: "2025-03-08",
    status: "completed",
  },
  {
    uuid: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    docName: "Mehrfamilienhaus_Hauptstraße_45.pdf",
    appraisalType: "Kurzgutachten",
    date: "2025-03-07",
    status: "completed",
  },
  {
    uuid: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    docName: "Gewerbeimmobilie_Industrieweg_8.pdf",
    appraisalType: "Wertgutachten",
    date: "2025-03-06",
    status: "completed",
  },
  {
    uuid: "d4e5f6a7-b8c9-0123-def1-234567890123",
    docName: "Eigentumswohnung_Parkstraße_23.pdf",
    appraisalType: "Verkehrswertgutachten",
    date: "2025-03-05",
    status: "completed",
  },
  {
    uuid: "e5f6a7b8-c9d0-1234-ef12-345678901234",
    docName: "Reihenhaus_Gartenweg_17.pdf",
    appraisalType: "Kurzgutachten",
    date: "2025-03-04",
    status: "completed",
  },
  {
    uuid: "f6a7b8c9-d0e1-2345-f123-456789012345",
    docName: "Bürogebäude_Geschäftsstraße_56.pdf",
    appraisalType: "Wertgutachten",
    date: "2025-03-03",
    status: "completed",
  },
  {
    uuid: "a7b8c9d0-e1f2-3456-1234-567890123456",
    docName: "Doppelhaushälfte_Sonnenallee_9.pdf",
    appraisalType: "Verkehrswertgutachten",
    date: "2025-03-02",
    status: "completed",
  },
  {
    uuid: "b8c9d0e1-f2a3-4567-2345-678901234567",
    docName: "Lagerhalle_Logistikpark_34.pdf",
    appraisalType: "Kurzgutachten",
    date: "2025-03-01",
    status: "completed",
  },
];

const appraisalTypeConfig = {
  Verkehrswertgutachten: {
    icon: FileText,
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  Kurzgutachten: {
    icon: ClipboardList,
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
  Wertgutachten: {
    icon: ScrollText,
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  },
};

export function AnalysisTable() {
  const router = useRouter();

  const handleViewReview = (uuid: string) => {
    // This will be implemented later
    router.push(`/r/${uuid}`);
  };

  return (
    <Card className="border-border/50">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">UUID</TableHead>
            <TableHead>Dokumentname</TableHead>
            <TableHead>Gutachtenart</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockAnalyses.map((analysis) => {
            const config = appraisalTypeConfig[analysis.appraisalType];
            const Icon = config.icon;

            return (
              <TableRow key={analysis.uuid}>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {analysis.uuid}
                </TableCell>
                <TableCell className="font-medium">
                  {analysis.docName}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${config.color} gap-1.5`}
                  >
                    <Icon className="h-3 w-3" />
                    {analysis.appraisalType}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menü öffnen</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleViewReview(analysis.uuid)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Zur Analyse
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
