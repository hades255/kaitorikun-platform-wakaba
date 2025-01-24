const mix = require("laravel-mix");
const webpack = require("webpack");
const dotenv = require("dotenv");
const CompressionPlugin = require("compression-webpack-plugin");
require("laravel-mix-purgecss");
require("laravel-mix-compress");

// Load environment variables from .env file
dotenv.config();

mix.setPublicPath("public")
    .react()
    .js("resources/js/app.js", "public/js/app.js")
    .sass("resources/css/app.scss", "public/css/app.css")
    .copy("resources/frontend/public", "public")
    .compress()
    .webpackConfig({
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    REVERB_APP_KEY: JSON.stringify(
                        process.env.REVERB_APP_KEY
                    ),
                    REVERB_HOST: JSON.stringify(
                        process.env.REVERB_HOST
                    ),
                    REVERB_PORT: JSON.stringify(
                        process.env.REVERB_PORT
                    ),
                    REVERB_SCHEME: JSON.stringify(
                        process.env.REVERB_SCHEME
                    ),
                    // Add more variables as needed
                },
            }),
        ],
    });

// Uncomment and configure as needed
// .version()
// .purgeCss({
//     safelist: [/row*/, /btn*/, /col*/],
// });
