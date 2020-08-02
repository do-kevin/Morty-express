const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  ['use-postcss-config'],
  {
    webpack: (config) => {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
      };

      if (config.mode === 'production') {
        config.plugins = [
          ...config.plugins,
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
          }),
        ];
      }

      if (config.mode === 'development') {
        config.plugins = [
          ...config.plugins,
          config.mode === 'development' && new ReactRefreshWebpackPlugin(),
        ];
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
