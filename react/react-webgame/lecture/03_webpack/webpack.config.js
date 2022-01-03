const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스에서는 production으로 바꾸면 됨
    devtool: 'eval',
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
                    ["@babel/preset-env", {
                        targets: {
                            browsers: ['> 1% in KR'],
                        },
                        debug: true,
                }],
                "@babel/preset-react",
                 ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.js"
    },//출력
};