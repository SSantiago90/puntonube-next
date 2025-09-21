'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface HeroProps {
  children: ReactNode;
  className?: string;
  id?: string;
  nextLink?: string;
  prevLink?: string;
  color?: string;
}

interface HeroContextType {
  heroProps: HeroProps | null;
  setHeroProps: (props: HeroProps | null) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [heroProps, setHeroProps] = useState<HeroProps | null>(null);

  return (
    <HeroContext.Provider value={{ heroProps, setHeroProps }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error('useHero must be used within a HeroProvider');
  }
  return context;
};
