import { WelcomeMessage } from "@/components/WelcomeMessage";
import { CustomerData } from "@/lib/constant";

export function DashboardHeader() {
  return (
    <WelcomeMessage
      firstName={CustomerData.firstName}
      lastName={CustomerData.lastName}
      profilePicName={CustomerData.profileLogo}
      className="mt-4"
    />
  );
}
