/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ['image/png', 'image/webp'],
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '443',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/trivai-images/**',
      }
    ],
  },
  experimental: {
    appDir: true,
  },

}

module.exports = nextConfig
