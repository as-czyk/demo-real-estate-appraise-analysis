"use client";

import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

// Dynamically import the PDF viewer client component.
const PDFViewerClient = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

const PDFViewer = ({ documentUrl }: { documentUrl: string }) => {
  return <PDFViewerClient documentUrl={documentUrl} />;
};
export default PDFViewer;
