/** @type {import('next').NextConfig} */

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_LANG,
    locales: JSON.parse(process.env.NEXT_PUBLIC_LANGS),
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};
