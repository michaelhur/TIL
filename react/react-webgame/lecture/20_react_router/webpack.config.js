const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'React Router',
    mode: 'production',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client']
    },//입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {browsers: ['last 2 chrome versions']},
                        debug: true,
                    }],
                "@babel/preset-react",
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    "react-refresh/babel"
                ],
            },
        }],
    },
    plugins: [
      new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        publicPath: "/dist",
    },//출력
    devServer: {
        historyApiFallback: true,
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
};