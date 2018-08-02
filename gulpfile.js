var gulp = require('gulp');
var bs = require('browser-sync').create();
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        index: 'Tesla Clone.html'
    });
});
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("*.html").on('change', bs.reload);
});
