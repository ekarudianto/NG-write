var webpack = require('webpack');

module.exports = {
    entry: [
        './app/scripts/index.js'
    ],
    output: {
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
