import { getAllPosts } from '@/lib/posts';
import BlogClientPage from './BlogClientPage';

export default function BlogPage() {
  const allPosts = getAllPosts();

  return <BlogClientPage allPosts={allPosts} />;
}
