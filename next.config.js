/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  }
}
module.exports = nextConfig
module.exports = {
  images: {
    domains: ['cdn.cosmicjs.com', 's1.static.brasilescola.uol.com.br', 'cdn.pixabay.com'],
  },
}
