/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // この行を追加
  basePath: '/YOYOGIBIYO',  // この行を追加
  images: {
    unoptimized: true,  // この行を追加
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

module.exports = nextConfig
