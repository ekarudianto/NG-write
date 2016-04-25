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

    /**
     * minify js
     */

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

    /**
     * resolver plugin, for using bower components
     */

        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        ),

    /**
     * provide plugin, load the component the first time
     */

        new webpack.ProvidePlugin({
            //'angular': 'exports?window.angular!angular',
        })
    ]
};
