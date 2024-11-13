const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',  // Matches all paths
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '/**',  // Matches all paths
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',  // Ensure this hostname is configured correctly
        pathname: '/**',  // Matches all paths on media2.dev.to
      },
    ],
  },
};
