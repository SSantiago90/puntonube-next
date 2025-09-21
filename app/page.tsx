import BlogPreview from '@/components/blog/BlogPreview';
import Contact from '@/components/Contact';
import HeroHome from '@/components/HeroHome';
import Services from '@/components/Services';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        <HeroHome />
        <Services />
        <UpcomingWebinars />
        <BlogPreview posts={posts} />
        {/* <About /> */}
        <Contact />
      </div>
    </main>
  );
}
