"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface WelcomeMessageProps {
  firstName?: string;
  lastName?: string;
  profilePicName?: string;
  className?: string;
}

export function WelcomeMessage({
  firstName = "User",
  lastName = "",
  profilePicName,
  className = "",
}: WelcomeMessageProps) {
  const displayName = lastName ? `${firstName} ${lastName}` : firstName;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-shrink-0">
        <Avatar className="h-20 w-20">
          {profilePicName && (
            <AvatarImage
              src={`/profile/${profilePicName}`}
              alt={`${displayName} profile`}
            />
          )}
          <AvatarFallback className="text-sm font-medium">
            {firstName.charAt(0).toUpperCase()}
            {lastName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          Willkommen, {displayName}!
        </h1>
        <p className="text-muted-foreground">
          Hier ist Ihre Übersicht für heute
        </p>
      </div>
    </div>
  );
}
