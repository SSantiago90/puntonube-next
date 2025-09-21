'use client';

import { useHero } from '@/context/HeroContext';

import Hero from './Hero';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { heroProps } = useHero();

  return (
    <>
      {heroProps && <Hero {...heroProps} />}
      {children}
    </>
  );
};

export default LayoutWrapper;
