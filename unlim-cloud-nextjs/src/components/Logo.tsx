'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/assets/unlim-clear.png"
        alt="UnlimCloud Logo"
        width={200}
        height={200}
        className="animate-pulse-scale"
        priority
      />
    </div>
  );
}