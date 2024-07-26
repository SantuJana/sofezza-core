/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                pathname: '**',
                hostname: 'cdn.prod.website-files.com'
            }
        ]
    }
};
export const assets = {
    // Use the CDN in production and localhost for development.
    assetPrefix: ["https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick-theme.css", "https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css"],
  }

export default nextConfig;
