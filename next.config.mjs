/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // This is used in case that fonts don't appear
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
