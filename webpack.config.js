const StylexPlugin = require('@stylexjs/webpack-plugin');
const path = require('path');

const config = (env, argv) => ({
  entry: {
    main: './src/components/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // Ensure that the stylex plugin is used before Babel
    new StylexPlugin({
      filename: 'styles.[contenthash].css',
      // get webpack mode and set value for dev
      dev: argv.mode === 'development',
      // Use statically generated CSS files and not runtime injected CSS.
      // Even in development.
      runtimeInjection: false,
      // optional. default: 'x'
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    }),
  ],
  cache: true,
});

module.exports = config;
