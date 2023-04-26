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
};
