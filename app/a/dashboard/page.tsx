import { AppraisalChart } from "./_comps/appraisal-chart";
import { DashboardHeader } from "./_comps/dashboard-header";
import { ErrorDistributionChart } from "./_comps/error-distribution-chart";
import { StatsCards } from "./_comps/stats-chart";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col gap-6 p-6 md:p-8 overflow-hidden">
      <DashboardHeader />
      <StatsCards />
      <div className="grid gap-6 lg:grid-cols-2">
        <AppraisalChart />
        <ErrorDistributionChart />
      </div>
    </div>
  );
}
