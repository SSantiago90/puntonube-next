import HeroHome from "@/components/HeroHome";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Blog from "@/components/blog/BlogPreview";

export default function Home() {
  return (
    <main className="min-h-screen">           
    <div className="min-h-screen">            
      <HeroHome />
      <Services />
      <About />
      <Blog/>
      <Contact />      
    </div>
    </main>
  );
}
