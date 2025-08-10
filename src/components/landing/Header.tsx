import React from 'react';

export const Header = () => {
  return (
    <header className="bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center">
                <div className="flex-1 flex justify-end">
                    <nav className="hidden sm:flex sm:items-center pr-8">
                        <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary">How It Works</a>
                    </nav>
                </div>
                <div className="flex-shrink-0">
                    <a href="#" className="font-bold text-2xl text-primary">ChipOracle</a>
                </div>
                <div className="flex-1 flex justify-start">
                    <nav className="hidden sm:flex sm:items-center pl-8">
                        <a href="#predict" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary">Predict</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
};