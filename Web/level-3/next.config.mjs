/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com',

      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',

      },
            {
        protocol: 'https',
        hostname: 'i.ytimg.com',

      },
    ],
  }
};

export default nextConfig;
