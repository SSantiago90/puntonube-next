import { getAllPosts, Post } from '@/lib/posts';

import BlogClientPage from './BlogClientPage';

export default function BlogPage() {
  const allPosts: Post[] = getAllPosts();

  return <BlogClientPage allPosts={allPosts} />;
}
