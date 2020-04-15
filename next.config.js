const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /.(png|jpg|mp4)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]',
                        emitFile: false,
                        publicPath: '/',
                    },
                },
            ],
        });

        config.plugins.push(new MinifyPlugin());

        return config;
    },
};
