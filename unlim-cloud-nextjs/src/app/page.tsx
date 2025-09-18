'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import VersionChecker from '@/components/VersionChecker';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showDonation, setShowDonation] = useState(false);
  const currentVersion = '2.0.0';

  const handleUpdateAvailable = () => {
    setShowDonation(true);
  };

  const handleNoUpdate = () => {
    // Redirect to the main UnlimCloud web app
    window.location.href = 'https://unlim-cloud.web.app';
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        
        <div className="mt-12 space-y-8">
          <VersionChecker
            currentVersion={currentVersion}
            onUpdateAvailable={handleUpdateAvailable}
            onNoUpdate={handleNoUpdate}
          />
          
          <DonationSection show={showDonation} />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}