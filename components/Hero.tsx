import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import CloudImage from "./CloudImage";
import SVGBackground from "./ui/svgbackground";

interface HeroProps {
  children: ReactNode;
  className?: string;
  id?: string;
  nextLink?: string;
  prevLink?: string;
  color?: string;
}

const Hero = ({ children, className = "", id = "hero-section", nextLink, prevLink, color = "text-black" }: HeroProps) => {
  // Check if className contains gradient classes
  const hasGradient = className.includes('from-') && className.includes('to-');
  const gradientClass = hasGradient ? 'bg-gradient-to-t' : '';
  
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center pt-20 relative overflow-hidden ${gradientClass} ${className}`}
    >
      {/* Left Arrow */}
      {prevLink && (
        <Link href={prevLink} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 bg-white/80 rounded-full shadow hover:bg-white transition-colors">
          <span className={`text-3xl ${color}`}> <ChevronLeft/></span>
        </Link>
      )}
      {/* Right Arrow */}
      {nextLink && (
        <Link href={nextLink} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 bg-white/80 rounded-full shadow hover:bg-white transition-colors">
          <span className={`text-3xl ${color}`}><ChevronRight/></span>
        </Link>
      )}
      <div className="absolute inset-0 opacity-10">
        <SVGBackground />
      </div>
      <CloudImage />
      <div className="container mx-auto px-6 relative z-10">        
        {children}
      </div>
    </section>
  );
};

export default Hero;
