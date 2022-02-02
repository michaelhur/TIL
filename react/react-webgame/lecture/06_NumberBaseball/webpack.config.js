const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'NumberBaseball',
    mode: 'development', // 실서비스에서는 production으로 바꾸면 됨
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'] // client.jsx가 WordRelay.jsx를 불러오기때문에 explicit하게 명시할 필요가 없다.
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
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
};