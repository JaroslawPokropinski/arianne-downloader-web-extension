module.exports = {
  webpack: (config, { dev, vendor }) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
        },
      ],
    });
    return config;
  },
};
