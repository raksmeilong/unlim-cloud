'use client';

import Image from 'next/image';
import { useState } from 'react';

interface DonationSectionProps {
  show?: boolean;
}

export default function DonationSection({ show = false }: DonationSectionProps) {
  const [isVisible] = useState(show);

  if (!isVisible) return null;

  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="flex justify-center">
        <Image
          src="/assets/dunno2.svg"
          alt="UnlimCloud Logo"
          width={80}
          height={80}
          className="opacity-80"
        />
      </div>
      
      <p className="text-lg text-gray-700 max-w-md mx-auto">
        If you find this software useful, consider supporting us with a donation.
      </p>
      
      <div className="flex justify-center">
        <a
          href="https://donate.inulute.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="border-2 border-gray-300 rounded-lg p-3 w-24 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-50 group-hover:scale-105">
            <Image
              src="/assets/donate.png"
              alt="Donate"
              width={40}
              height={40}
              className="mx-auto"
            />
          </div>
        </a>
      </div>
      
      <div className="flex justify-center space-x-4">
        <a
          href="https://ko-fi.com/inulute"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0"
            alt="Buy Me a Coffee at ko-fi.com"
            width={174}
            height={41}
            className="rounded"
          />
        </a>
        
        <a
          href="https://paypal.me/inulute"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/assets/payment/paypal.svg"
            alt="PayPal"
            width={174}
            height={41}
            className="rounded"
          />
        </a>
        
        <a
          href="https://upi-inulute.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/assets/payment/upi.svg"
            alt="UPI"
            width={174}
            height={41}
            className="rounded"
          />
        </a>
      </div>
      
      <p className="text-sm text-gray-500">
        Note: UPI is only available for Indian users.
      </p>
    </div>
  );
}