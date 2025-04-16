const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Configurar polyfills para módulos de Node.js
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        os: require.resolve("os-browserify/browser"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        vm: require.resolve("vm-browserify"),
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        tty: require.resolve("tty-browserify"),
        constants: require.resolve("constants-browserify"),
        fs: false,
        child_process: false,
        worker_threads: false,
        module: false
      };

      // Ignorar archivos .d.ts y módulos del servidor
      webpackConfig.module.rules.push(
        {
          test: /\.d\.ts$/,
          use: 'null-loader'
        },
        {
          test: /node_modules\/(esbuild|@swc|jest-worker|webpack|uglify-js|watchpack)\//,
          use: 'null-loader'
        }
      );

      // Plugins adicionales
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
      );

      return webpackConfig;
    }
  }
};