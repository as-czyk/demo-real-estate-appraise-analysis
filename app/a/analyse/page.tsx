import { UploadForm } from "./_comps/upload-form";
import { UploadHeader } from "./_comps/upload-header";

export default function UploadPage() {
  return (
    <div className="flex min-h-screen flex-col gap-8 p-8">
      <UploadHeader />
      <UploadForm />
    </div>
  );
}
