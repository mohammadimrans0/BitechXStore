export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all HTTPS hosts
      },
      {
        protocol: 'http',
        hostname: '**', // allow all HTTP hosts (optional)
      },
    ],
  },
};
