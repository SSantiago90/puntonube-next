'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import BlogPost from '@/components/blog/BlogPost';
import BlogSecondaryMenu from '@/components/blog/BlogSecondaryMenu';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Button } from '@/components/ui/button';

type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
};

const BlogClientPage = ({ allPosts }: { allPosts: Post[] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const filteredPosts = allPosts.filter((post) => {
    const categoryMatch =
      selectedCategory === 'All' || post.category === selectedCategory;
    const monthMatch =
      selectedMonth === 'All' || post.date.startsWith(selectedMonth);
    return categoryMatch && monthMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-light-blue-50">
      {/* Header with back button */}
      <div className="bg-white/80 backdrop-blur-md border-b border-light-blue-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-light-blue-600 hover:bg-light-blue-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Blog</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <BlogSecondaryMenu
            posts={allPosts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedMonth={selectedMonth}
            onSelectMonth={setSelectedMonth}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <BlogPost key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              posts={allPosts}
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setSelectedMonth('All'); // Reset month filter
              }}
              selectedMonth={selectedMonth}
              onSelectMonth={(month) => {
                setSelectedMonth(month);
                setSelectedCategory('All'); // Reset category filter
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogClientPage;
