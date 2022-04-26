let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/app.js', 'public/dist/js').vue();
mix.sass('src/app.scss', 'public/dist/style')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });