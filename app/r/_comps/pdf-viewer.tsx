"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { usePageStore } from "@/store/PageStore";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
}

const ViewerClient = ({ documentUrl }: { documentUrl: string }) => {
  const [numPages, setNumPages] = useState<number>();
  const { page, setPage } = usePageStore();
  const [pdfFile, setPdfFile] = useState<string | null>(null);

  // Load PDF file on component mount
  useEffect(() => {
    setPdfFile("/beispiel-gutachten.pdf");
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  return (
    <Card className="h-inherit">
      <CardHeader className="sticky top-0 z-10 bg-background/80 backdrop-blur">
        <div className="flex items-center justify-end gap-2  h-full">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPreviousPage}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Seite {page} von {numPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextPage}
            disabled={page === numPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
          {pdfFile && (
            <Document
              file={"http://localhost:3000" + pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-screen">
                  <Loader className="animate-spin" />
                </div>
              }
            >
              <Page
                pageNumber={page}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={500}
              />
            </Document>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewerClient;
