"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, FileText } from "lucide-react";
import { AnalysisProgress } from "./analysis-progress";

const appraisalTypes = [
  { id: "verkehrswertgutachten", name: "Verkehrswertgutachten" },
  { id: "kurzgutachten", name: "Kurzgutachten" },
  { id: "wertgutachten", name: "Wertgutachten" },
];

export function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [appraisalType, setAppraisalType] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !appraisalType) {
      toast("Bitte wählen Sie eine Datei und einen Gutachtentyp aus.");
      return;
    }

    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    toast("Das Gutachten wurde erfolgreich analysiert und gespeichert.");

    setIsAnalyzing(false);
    setSelectedFile(null);
    setAppraisalType("");

    // Reset file input
    const fileInput = document.getElementById(
      "file-upload"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dokument hochladen</CardTitle>
          <CardDescription>
            Wählen Sie ein Gutachten aus und geben Sie den Typ an
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="file-upload">Gutachten-Datei</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  disabled={isAnalyzing}
                  className="cursor-pointer"
                />
              </div>
              {selectedFile && (
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    {selectedFile.name}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="appraisal-type">Gutachtenart</Label>
              <Select
                value={appraisalType}
                onValueChange={setAppraisalType}
                disabled={isAnalyzing}
              >
                <SelectTrigger id="appraisal-type">
                  <SelectValue placeholder="Wählen Sie eine Gutachtenart" />
                </SelectTrigger>
                <SelectContent>
                  {appraisalTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!selectedFile || !appraisalType || isAnalyzing}
            >
              <Upload className="mr-2 h-4 w-4" />
              {isAnalyzing ? "Wird analysiert..." : "Hochladen und analysieren"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isAnalyzing && (
        <AnalysisProgress
          appraisalType={appraisalType}
          onComplete={handleAnalysisComplete}
        />
      )}
    </div>
  );
}
