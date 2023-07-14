/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    }
}

module.exports = {
    ...nextConfig,
    env: {
        GITHUB_ID: process.env.GITHUB_ID,
        GUTHUB_SECRET: process.env.GITHUB_SECRET,
    },
}
