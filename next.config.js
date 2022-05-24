/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withImages({
    trailingSlash: true,
})


module.exports = nextConfig
