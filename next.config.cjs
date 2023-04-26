module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
  env: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_PAYLOAD_PUBLIC_SERVER_URL:
      process.env.NEXT_PUBLIC_PAYLOAD_PUBLIC_SERVER_URL,
    PAYLOAD_PUBLIC_SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
};
