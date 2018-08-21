var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var minifyCss = require('gulp-minify-css');
var reload = browserSync.reload;
var paths = {
	html: ['index.html'],
	css: ['scss/main.scss']
	
}




////////////////////
///Browser-sync
////////////////////
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});




////////////////////
///HTML
////////////////////
gulp.task('html', function() {
	gulp.src(paths.html)
	.pipe(notify('Done, HTML!'))
	.pipe(reload({stream: true}));
});



////////////////////
///CSS
////////////////////
gulp.task('mincss', function() {
	return gulp.src(paths.css)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCss())
	.pipe(gulp.dest('css'))
	.pipe(notify('Done, CSS!'))
	.pipe(reload({stream: true}));
});



////////////////////
///Watch task
////////////////////
gulp.task('watcher', function() {
	gulp.watch(paths.css, ['mincss']);
	gulp.watch(paths.html, ['html']);
	console.log('seen');
});

gulp.task('default', ['watcher', 'browserSync']);