const gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , sass = require('gulp-sass')
  , concat = require('gulp-concat')
  , CacheBuster = require('gulp-cachebust')
  , print = require('gulp-print')
  , babel = require('gulp-babel')
  , uglify = require('gulp-uglify');

const cachebust = new CacheBuster();

const paths = {
  jsSource: ['./public/js/**/*.js'],
  styleSource: ['./public/styles/**/*.*css'],
  htmlSource: ['./public/**/*.html']
};

gulp.task('build-styles', () => {
  gulp.src(paths.styleSource)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-js', () => {
  gulp.src(paths.jsSource)
    .pipe(sourcemaps.init())
    .pipe(print())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('bundle.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-html', () => {
  gulp.src(paths.htmlSource)
    .pipe(cachebust.references())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch(paths.styleSource, ['build-styles']);
  gulp.watch(paths.jsSource, ['build-js'])
  gulp.watch(paths.htmlSource, ['build-html']);
});

gulp.task('default', [
  'build-styles',
  'build-js',
  'build-html',
  'watch'
]);