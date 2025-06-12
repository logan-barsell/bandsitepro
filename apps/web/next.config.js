/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@bandsitepro/ui',
    '@bandsitepro/trpc',
    '@bandsitepro/prisma',
  ],
};

module.exports = nextConfig;
