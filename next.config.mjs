/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.sho-ps.co.jp' }]
  }
}

export default nextConfig
