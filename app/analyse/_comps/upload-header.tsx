import { Upload } from "lucide-react";

export function UploadHeader() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 border-2 border-primary/20">
        <Upload className="h-8 w-8 text-primary" />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Gutachten hochladen
        </h1>
        <p className="text-muted-foreground">
          Laden Sie ein Gutachten hoch und starten Sie die automatische Prüfung
        </p>
      </div>
    </div>
  );
}
