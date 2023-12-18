//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
      domains: ['ik.imagekit.io'],
  },
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: String(process.env.GOOGLE_SERVICE_PRIVATE_KEY),
  },
  webpack: (config, {
        isServer
    }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.tls = false;
            config.resolve.fallback.net = false;
            config.resolve.fallback.child_process = false;
        }

        return config;
    },
    
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
