/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          port: '',
          pathname: '/random',
        },
      ],
    },
    experimental: {
      serverComponentsExternalPackages: ['knex'],
    },
  };  

module.exports = nextConfig
