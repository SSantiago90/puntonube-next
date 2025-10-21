import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactComponentAnnotation: {
    enabled: process.env.NODE_ENV === 'development',
  },
};

export default withMDX(nextConfig);
