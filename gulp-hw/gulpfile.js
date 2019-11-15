const { series, watch, src, dest } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const inject = require('gulp-inject');
const browserSync = require('browser-sync').create();

function copyFiles(){
    return src('./src/index.html')
            .pipe(dest('dist/'));
}

function scripts(cb){
    return src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('dist/'))
}

function styles(cb){
    return src('src/assets/styles.sass')
        .pipe(sass())
        .pipe(dest('dist/'))
}

function html(){
    const sources = src(['./dist/*.js', './dist/*.css'], {read: false});
   
    return src('./dist/index.html')
            .pipe(inject(sources, {  relative: true }))
            .pipe(dest('./dist'));

}

function watchFiles(){
    watch('./src/index.html', series(copyFiles, html));
    watch('./src/**/*.js', scripts);
    watch('src/**/*.sass', styles);
}

function serve(){
    browserSync.init({
        server: "./dist"
    });

    watch('./src/index.html', series(copyFiles, html, (cb)=> { browserSync.reload(); cb()}));
    watch('./src/**/*.js', series(scripts, (cb)=> { browserSync.reload(); cb()}));
    watch('src/**/*.sass', series(styles, (cb)=> {browserSync.reload(); cb()}));
}


const build = series(copyFiles, scripts, styles, html);

module.exports = {
    build: build,
    dev: series(build, watchFiles),
    serve: series(build, serve),
}