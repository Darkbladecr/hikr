const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const watch = require('gulp-watch');

const js = 'src/**/*.js';
const ux = 'src/**/*!(.js)';

gulp.task('default', ['clean'], () => {
	gulp.src(js)
		.pipe(babel())
		.pipe(gulp.dest('dist'));
	gulp.src(ux)
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
	return del('dist/');
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
