/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',

      },
            {
        protocol: 'https',
        hostname: 'www.pixelstalk.net',

      },
            {
        protocol: 'https',
        hostname: 'i.ytimg.com',

      },
    ],
  },
};

export default nextConfig;
