var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname + '/app/scripts/index.js'
    ],
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: [
            __dirname + '/app/vendors',
            __dirname + '/node_modules'
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            //'angular': 'exports?window.angular!angular',
            $: "jquery"
        })
    ]
};
