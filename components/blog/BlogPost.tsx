import { Calendar, Heart, Share2, Tag, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    category: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    date: string;
    readTime: string;
    image: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <Card className="overflow-hidden shadow-lg border-0 bg-white">
      {/* Header image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-light-blue-600 text-white hover:bg-light-blue-700">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-8">
        {/* Post header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
            {post.title}
          </h2>

          {/* Author and meta info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-light-blue-100 rounded-full flex items-center justify-center">
                <span className="text-light-blue-600 font-semibold">
                  {post.author.avatar}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {post.author.name}
                </p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.readTime} lectura</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post content */}
        <div className="prose prose-lg max-w-none mb-8">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Post actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-red-500"
            >
              <Heart className="w-4 h-4 mr-2" />
              Me gusta
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-light-blue-600"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          </div>

          <div className="text-sm text-gray-500">Artículo #{post.id}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
