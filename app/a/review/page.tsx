import { AnalysisHeader } from "./_comps/analysis-header";
import { AnalysisTable } from "./_comps/analysis-table";

export default function Review() {
  return (
    <div className="flex min-h-screen flex-col gap-16 p-6 md:p-8">
      <AnalysisHeader />
      <AnalysisTable />
    </div>
  );
}
