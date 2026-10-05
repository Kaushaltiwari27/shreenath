import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'navbar' | 'footer' | 'card' | 'symbol-only';
  showContainer?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-11 sm:h-12",
  variant = 'navbar',
}) => {
  if (variant === 'symbol-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/favicon.png"
          alt="Shreenath Enterprise Emblem"
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  // Pure transparent logo with zero white background box
  return (
    <div className="relative inline-flex items-center transition-transform duration-300 hover:scale-[1.02]">
      <img
        src="/images/logo.png"
        alt="SHREENATH ENTERPRISE - Global Sourcing & Reliable Supply"
        className={`${className} w-auto object-contain drop-shadow-md`}
      />
    </div>
  );
};


