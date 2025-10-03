import Link from "next/link";
import Image from "next/image";
import agentenschmiede from "@/public/logo_agentenschmiede.png";

export function ReviewFooter() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-muted/30 py-4">
      <div className="flex justify-center items-center gap-2">
        <Link href="https://agentenschmiede.com" target="_blank">
          <Image
            src={agentenschmiede}
            alt="Agentenschmiede"
            width={45}
            height={45}
          />
        </Link>
        <small>
          by{" "}
          <Link href="https://agentenschmiede.com" target="_blank">
            agentenschmiede
          </Link>
        </small>
      </div>
    </footer>
  );
}
