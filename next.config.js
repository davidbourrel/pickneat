module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: JSON.parse(process.env.NEXT_PUBLIC_LANGS),
    defaultLocale: process.env.NEXT_PUBLIC_LANG,
  },
  images: {
    domains: ['s.gravatar.com', 'images.unsplash.com'],
  },
};
