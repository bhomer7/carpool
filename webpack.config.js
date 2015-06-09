module.exports = {
    entry: './src/browser/launch.js',
    output: {
        path: 'public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM' },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};