import About from '@/components/About';
import Blog from '@/components/blog/BlogPreview';
import Contact from '@/components/Contact';
import HeroHome from '@/components/HeroHome';
import Services from '@/components/Services';
import UpcomingWebinars from '@/components/UpcomingWebinars';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        <HeroHome />
        <Services />
        <UpcomingWebinars />
        <Blog />
        <About />
        <Contact />
      </div>
    </main>
  );
}
