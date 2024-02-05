/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  unoptimized:true,
  output: 'export',
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        // pathname: '/blogImg.fields.file.url/',
      },
    ],
    // domains: ['images.ctfassets.net'],
  },
};
