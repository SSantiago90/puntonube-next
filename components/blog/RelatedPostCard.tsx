import Link from 'next/link';

interface RelatedPostCardProps {
  post: {
    slug: string;
    title: string;
    summary: string;
  };
}

export function RelatedPostCard({ post }: RelatedPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border rounded-lg p-4 h-full hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{post.summary}</p>
      </div>
    </Link>
  );
}
