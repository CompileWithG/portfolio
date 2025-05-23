// next.config.ts
import type { NextConfig } from 'next';
import withTM from 'next-transpile-modules';

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  // other configurations...
};

export default withTM(['three'])(nextConfig);