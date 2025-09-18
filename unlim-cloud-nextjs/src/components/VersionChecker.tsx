'use client';

import { useState, useEffect } from 'react';

interface VersionCheckerProps {
  currentVersion: string;
  onUpdateAvailable?: (latestVersion: string) => void;
  onNoUpdate?: () => void;
}

export default function VersionChecker({ 
  currentVersion, 
  onUpdateAvailable, 
  onNoUpdate 
}: VersionCheckerProps) {
  const [isChecking, setIsChecking] = useState(true);
  const [updateInfo, setUpdateInfo] = useState<{
    latestVersion: string;
    hasUpdate: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const compareVersions = (v1: string, v2: string): number => {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);
    
    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
      const part1 = parts1[i] || 0;
      const part2 = parts2[i] || 0;
      
      if (part1 > part2) return 1;
      if (part1 < part2) return -1;
    }
    
    return 0;
  };

  const checkForUpdates = async () => {
    try {
      setIsChecking(true);
      setError(null);
      
      const response = await fetch('https://raw.githubusercontent.com/inulute/unlim-cloud/main/package.json');
      const { version: latestVersion } = await response.json();
      
      const hasUpdate = compareVersions(latestVersion, currentVersion) === 1;
      
      setUpdateInfo({ latestVersion, hasUpdate });
      
      if (hasUpdate) {
        onUpdateAvailable?.(latestVersion);
      } else {
        onNoUpdate?.();
      }
    } catch (err) {
      setError('Error checking for updates. Please check your internet connection and try again.');
      console.error('Error fetching version file:', err);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, [currentVersion, onUpdateAvailable, onNoUpdate]);

  const handleDownload = () => {
    window.open('https://github.com/inulute/unlim-cloud/releases/latest', '_blank');
  };

  const handleRemindLater = () => {
    window.location.href = 'https://unlim-cloud.web.app';
  };

  if (isChecking) {
    return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Checking for updates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={checkForUpdates}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (updateInfo?.hasUpdate) {
    return (
      <div className="text-center space-y-4">
        <p className="text-lg font-semibold text-green-600">
          Update Available: Latest Version - {updateInfo.latestVersion}
        </p>
        <div className="space-x-4">
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Download Update
          </button>
          <button
            onClick={handleRemindLater}
            className="px-6 py-3 border-2 border-gray-400 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Remind Me Later
          </button>
        </div>
      </div>
    );
  }

  return null;
}