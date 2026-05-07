import { defineConfig } from 'next';
export default defineConfig({
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'localhost' }]
  }
});