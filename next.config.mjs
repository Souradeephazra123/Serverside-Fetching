/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "d2pdttu7ab7hd9.cloudfront.net/movies/backdrop/original/",
      },
    ],
  },
};
export default nextConfig;
