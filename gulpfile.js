var gulp = require('gulp'); // importujemy gulp
var uglify = require('gulp-uglify'); //minifakcja plikw

gulp.task('buildjs', function() {
	gulp.src('source/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});
