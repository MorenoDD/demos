/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{
                protocol: 'https',
                hostname: 'unsplash.it'
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            },
            {
                protocol: 'http',
                hostname: 'strada.local'
            },
            {
                protocol: 'https',
                hostname: 'dev.morenodd.com'
            },
            {
                protocol: 'https',
                hostname: '*.cloudwaysapps.com'
            }
        ]
    }
};

export default nextConfig;