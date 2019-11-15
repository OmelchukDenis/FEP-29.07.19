const { series, src, dest, watch } = require('gulp');

function copyTask(cb){
    src('src/*.html')
        .pipe(src('src/**/*.css'))
        .pipe(dest('dist/'))
    cb();
}


function devTask(){
    watch('src/**/*.*', {}, function(cb){
        src('src/*.html')
            .pipe(src('src/**/*.css'))
            .pipe(dest('dist/'));

        cb();
    })
}

function minifyTask(cb){
    console.log('Minify');

    cb();
}

function defaultTask(cb){
    console.log('I am doing smth');

    cb()
}


module.exports.default = defaultTask;
module.exports.build = series(copyTask, minifyTask);
module.exports.dev = devTask;
