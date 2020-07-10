const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  ['use-postcss-config'],
  {
    webpack: (config) => {
      if (config.mode === 'production') {
        config.plugins = [
          ...config.plugins,
          // new BundleAnalyzerPlugin({
          //   analyzerMode: 'static',
          //   reportFilename: 'analyzed-bundle.html',
          // }),
        ];
      }

      if (config.mode === 'development') {
        config.plugins = [...config.plugins, new ReactRefreshWebpackPlugin()];
      }

      config.plugins = [
        ...config.plugins,
        new AntdDayjsWebpackPlugin(),
        new LodashModuleReplacementPlugin({
          shorthands: true,
          collections: true,
          paths: true,
          cloning: true,
        }),
      ];

      return config;
    },
  },
  logConfig,
];
