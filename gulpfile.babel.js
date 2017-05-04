const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

const js = 'src/**/*.js';
const ux = 'src/**/*!(.js)';

gulp.task('default', ['babel', 'assets']);

gulp.task('babel', () => {
	return gulp.src(js)
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
	return gulp.src(ux)
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['babel:watch', 'assets:watch']);

gulp.task('babel:watch', () => {
	return watch(js, {
			ignoreInitial: false
		})
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('assets:watch', () => {
	return watch(ux, {
			ignoreInitial: false
		})
		.pipe(gulp.dest('dist'));
});
