import React from 'react';

export const Header = () => {
  return (
    <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex-shrink-0">
                    <a href="#" className="font-bold text-lg">ChipOracle</a>
                </div>
                <nav className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1 gap-8">
                    <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">How It Works</a>
                    <a href="#upload" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Upload</a>
                </nav>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <a href="#leaderboard" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Leaderboard</a>
                </div>
            </div>
        </div>
    </header>
  );
};