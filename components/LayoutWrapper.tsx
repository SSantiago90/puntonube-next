'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useHero } from '@/context/HeroContext';
import Hero from './Hero';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { heroProps } = useHero();
  const pathname = usePathname();

  return (
    <>
      {heroProps && <Hero {...heroProps} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default LayoutWrapper;
