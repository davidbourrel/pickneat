/** @type {import('next').NextConfig} */

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  images: {
    domains: ['s.gravatar.com'],
  },
};
