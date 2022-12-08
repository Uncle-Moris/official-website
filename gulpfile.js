const {src, dest, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');

const imagemin = require('gulp-imagemin');

const paths = {
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/img/*',
    sassDest: './dist/css',
    jsDest:'./dist/js',
    imgDest:'./dist/img'
}

function sassCompiler(cb) {
    src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(dest(paths.sassDest));
    cb()
}


function convertImages(cb) {
    src(paths.img)
        .pipe(imagemin())
        .pipe(dest(paths.imgDest));
    cb()
}


exports.default = series(sassCompiler, convertImages)