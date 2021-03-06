// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'raw.githubusercontent.com', 'geosrbija.rs'],
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/skills': { page: '/skills' },
      '/work': { page: '/work' },
    };
  },
  // assetPrefix: '',
  assetPrefix: !debug ? '/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  }, /* ,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
};
