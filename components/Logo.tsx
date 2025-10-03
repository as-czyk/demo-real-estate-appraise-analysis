"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  logoName?: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export function Logo({
  logoName,
  width = 64,
  height = 64,
  className = "rounded",
  alt = "Logo",
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // If no logoName provided or image failed to load, show default
  if (!logoName || imageError) {
    return (
      <div
        className={`w-${width / 4} h-${
          height / 4
        } bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        Logo
      </div>
    );
  }

  return (
    <Image
      src={`/logos/${logoName}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
