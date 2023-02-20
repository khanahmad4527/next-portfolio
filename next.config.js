/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.genscript.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
