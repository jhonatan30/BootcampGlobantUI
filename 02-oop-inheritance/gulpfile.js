var gulp        = require('gulp');
var browserSync = require('browser-sync');
var babel 		= require('gulp-babel');
var clean 		= require('gulp-clean');

// copie files and reloaded
gulp.task('copyIndex', function () 
{
	gulp.src('src/index.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));

	// var theFileOrFiles = gulp.src('src/index.html');
	// var filesYouCopied = gulp.det('./build');
	// var theFilesYouReload = browserSync.reload(filesYouCopied);
	 
});

//create server
// gulp.task('browserSync', function () {
// 	 browserSync({
// 	 	server: {
// 	 		baseDir: './build'
// 	 	}
// 	 });
// });

gulp.task('watchFiles', function () {
	 // gulp.watch('src/index.html', ['copyIndex'])
	 gulp.watch('src/**/*.js', ['babelIt']);
});


gulp.task('babelIt', function () 
{
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', function () {
	 return gulp.src('./build', {read: false})
	 		.pipe(clean());
});

// gulp.task('default', ['clean', 'copyIndex', 'browserSync', 'watchFiles']);
