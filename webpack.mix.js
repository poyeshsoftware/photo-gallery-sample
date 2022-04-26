let mix = require('laravel-mix');

// mix.js('src/app.js', 'dist').setPublicPath('dist');

mix.js('src/app.js', 'dist/js').vue();
mix.sass('src/app.scss', 'dist/style');