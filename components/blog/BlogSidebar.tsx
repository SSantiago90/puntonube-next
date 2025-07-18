
import { Archive,Calendar, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogSidebarProps {
  posts: Array<{
    id: number;
    title: string;
    category: string;
    date: string;
    readTime: string;
  }>;
}

const BlogSidebar = ({ posts }: BlogSidebarProps) => {
  // Group posts by category for quick stats
  const categoryCounts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6 sticky top-24 ">
      {/* Recent Posts */}
      <Card className="shadow-lg border-0 bg-sky-600">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold  text-sky-200  flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Posts Recientes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {posts.slice(0, 5).map((post) => (
            <div key={post.id} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
              <h4 className="font-medium text-sky-100 text-sm leading-tight mb-2 line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-sky-300">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </span>
                <Badge variant="outline" className="text-xs text-white opacity-60">
                  {post.category}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="shadow-lg border-0 bg-sky-600">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold  text-sky-200  flex items-center">
            <Archive className="w-5 h-5 mr-2" />
            Categorías
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <div key={category} className="flex items-center justify-between text-sky-100">
              <span className="text-sm">{category}</span>
              <Badge variant="secondary" className="bg-light-blue-100 text-light-blue-700">
                {count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Archive by month */}
      <Card className="shadow-lg border-0 bg-sky-600">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-sky-200 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Archivo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sky-100">
          <div className="flex items-center justify-between text-sm ">
            <span>Marzo 2024</span>
            <span className="text-sky-300">{posts.length} posts</span>
          </div>
          <div className="flex items-center justify-between text-sm ">
            <span className="text-sky-300">Febrero 2024</span>
            <span className="text-sky-500">8 posts</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-sky-300">Enero 2024</span>
            <span className="text-sky-500">12 posts</span>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter signup */}
      <Card className="hidden shadow-lg border-0 bg-gradient-to-br from-light-blue-50 to-light-blue-100">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold text-gray-800 mb-2">¡Mantente actualizado!</h3>
          <p className="text-sm text-gray-600 mb-4">
            Recibe nuestros últimos artículos directamente en tu email.
          </p>
          <button className="w-full bg-light-blue-600 hover:bg-light-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
            Suscribirse
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;