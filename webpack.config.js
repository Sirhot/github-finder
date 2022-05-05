//nodejs
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),

        port: 9000
    },
    module: {//using it insted of "babel": "npx babel src/app.js --out-file=public/scripts/app.js --watch" 
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',//loader should download. npm i babel-loader --save-dev
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader']//css
                use: ['style-loader', 'css-loader', 'sass-loader']//loader should download. npm i css-loader style-loader --save-dev . btw u should use them with related date versions or latest versions. They should be use together with their versions. 
                //loaders' order is important
                //download sass-loader and node-sass- sass for scss files
                //npm install --save-dev sass
                //https://thewebdev.info/2021/11/12/how-to-add-scss-styles-to-a-react-project/
            },
            {
                //https://v4.webpack.js.org/loaders/file-loader/
                //we dont need doing that if we have created our project with creat react app 
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }

}
// https://webpack.js.org/