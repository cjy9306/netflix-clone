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

        return config;
    },
};
