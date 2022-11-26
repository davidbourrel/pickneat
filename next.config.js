/** @type {import('next').NextConfig} */

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_LANG,
    locales: JSON.parse(process.env.NEXT_PUBLIC_LANGS),
  },
  images: {
    domains: ['s.gravatar.com', 'images.unsplash.com'],
  },
};
