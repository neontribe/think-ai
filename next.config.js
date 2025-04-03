module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.blob.core.windows.net',
        pathname: '/**',
      },
    ],
  },
};
