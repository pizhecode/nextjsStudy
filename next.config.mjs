import withSass from '@zeit/next-sass';
import withAntdLess from 'next-plugin-antd-less';

export default withAntdLess(
  withSass({
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
        };
      }

      // Ensure to properly handle Ant Design's ES modules
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules/,
        exclude: /node_modules\/(?!(rc-util|react-is|antd)\/)/, // Handle Ant Design and rc-util modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      });

      return config;
    },
  })
);
