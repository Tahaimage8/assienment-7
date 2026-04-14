/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
      // "picture": "https://randomuser.me/api/portraits/men/34.jpg",
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
