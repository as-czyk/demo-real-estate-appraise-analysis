import { FindingsList } from "../_comps/finding-list";
import ViewerClient from "../_comps/pdf-viewer";
import { ReviewFooter } from "../_comps/review-footer";
import { ReviewHeader } from "../_comps/review-header";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col gap-6 p-12 md:px-16">
        <ReviewHeader analysisId={id} />
        <div className="grid gap-6 lg:grid-cols-[70%_30%]">
          <ViewerClient documentUrl={`/placeholder.pdf`} />
          <FindingsList />
        </div>
      </div>
      <ReviewFooter />
    </div>
  );
}
