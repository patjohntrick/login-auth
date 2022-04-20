module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
      crypto: require.resolve("crypto/browserify"),
      util: require.resolve("util/"),
      stream: require.resolve("stream-browserify"),
      process: require.resolve("process/browser"),
    },
  },
};
