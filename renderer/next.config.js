require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config, { isServer, defaultLoaders }) => {
    
    // config.module.rules.push({
    //   test: /\.(css)$/,
    //   use: [
    //     defaultLoaders.babel,
    //     {
    //       loader: require('styled-jsx/webpack').loader,
    //       options: {
    //         type: 'global',
    //       },
    //     },
    //   ],
    // });

    if (!isServer) {
      config.target = 'electron-renderer';
    }

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    ) 

    return config;
  },
};
