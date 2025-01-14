const mix = require("laravel-mix");
const CompressionPlugin = require("compression-webpack-plugin");
require("laravel-mix-purgecss");
require("laravel-mix-compress");

mix.setPublicPath("public")
    .react()
    .js("resources/js/app.js", "public/js/app.js")
    // .version()
    .sass("resources/css/app.scss", "public/css/app.css")
    // .version()
    // .purgeCss({
    //     safelist: [/row*/, /btn*/, /col*/],
    // })
    .copy("resources/frontend/public", "public").compress();

