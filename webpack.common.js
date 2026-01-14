const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.js",
        sql: "./src/sql.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['main'], // Inject only the 'main' bundle
        }),
        new HtmlWebpackPlugin({
            template: "./src/python_automation/index.html",
            filename: "python_automation.html",
            chunks: ['main'], // Inject only the 'main' bundle
        }),
        new HtmlWebpackPlugin({
            template: "./src/sql/index.html",
            filename: "sql.html",
            chunks: ['main', 'sql'], // Inject the 'main' and 'sql' bundles
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
