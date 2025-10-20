import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

import { RelatedPostCard } from '@/components/blog/RelatedPostCard';
import { Callout } from '@/components/mdx/Callout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllPosts, getPostData } from '@/lib/posts';

// Define los componentes que estarán disponibles en los archivos MDX.
const components = {
  Callout,
};

const options = {
  mdxOptions: {
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
  },
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string) {
  try {
    const post = await getPostData(slug);
    return post;
  } catch {
    notFound();
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/blog">
              <Button
                variant="ghost"
                size="sm"
                className="text-light-blue-600 hover:bg-light-blue-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <article className="max-w-4xl mx-auto">
              {/* Post Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.readTime} lectura</span>
                    </div>
                  </div>
                  <Badge variant="outline">{post.category}</Badge>
                </div>
              </header>

              {/* Featured Image */}
              {post.image && (
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
                <MDXRemote
                  source={post.content}
                  components={components}
                  options={options}
                />
              </div>
            </article>

            {relatedPosts.length > 0 && (
              <div className="max-w-4xl mx-auto mt-16">
                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Posts Relacionados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost) => (
                      <RelatedPostCard
                        post={relatedPost}
                        key={relatedPost.slug}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
