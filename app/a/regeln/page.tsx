import { AppraisalTypesSection } from "./_comps/appraisal-types-section";
import { RulesHeader } from "./_comps/rules-header";
import { RulesListSection } from "./_comps/rules-list-section";

export default function RulesPage() {
  return (
    <div className="flex min-h-screen flex-col gap-16 p-6 md:p-8">
      <RulesHeader />
      <AppraisalTypesSection />
      <RulesListSection />
    </div>
  );
}
