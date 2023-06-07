/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = nextTranslate({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  }
})

module.exports = nextConfig
