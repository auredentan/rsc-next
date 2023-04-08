/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["@rsc/db"],
  },
};

module.exports = nextConfig;
