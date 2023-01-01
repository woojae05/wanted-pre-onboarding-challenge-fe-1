/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    plugins: [
      [
        "@swc/plugin-styled-components",
        {
          displayName: true,
          ssr: true,
        },
      ],
    ],
  },
};

module.exports = nextConfig;
