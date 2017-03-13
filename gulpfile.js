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
  app_JS: ['./public/app/**/*.js'],
  app_CSS: ['./public/assets/styles**/*.*css'],
  lib_JS: ['./public/assets/lib/**/*.js'],
  lib_CSS: ['./public/assets/lib/**/*.*css'],
  app_HTML: ['./public/**/*.html']
};

gulp.task('build-appCSS', () => {
  gulp.src(paths.app_CSS)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('app_styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-libCSS', () => {
  gulp.src(paths.lib_CSS)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('lib_styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-appJS', () => {
  gulp.src(paths.app_JS)
    .pipe(sourcemaps.init())
    .pipe(print())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('app_bundle.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-libJS', () => {
  gulp.src(paths.lib_JS)
    .pipe(sourcemaps.init())
    .pipe(print())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('lib_bundle.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-html', () => {
  gulp.src(paths.app_HTML)
    .pipe(cachebust.references())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch(paths.app_CSS, ['build-appCSS']);
  gulp.watch(paths.lib_CSS, ['build-libCSS']);
  gulp.watch(paths.app_JS, ['build-appJS']);
  gulp.watch(paths.lib_JS, ['build-libJS']);
  gulp.watch(paths.htmlSource, ['build-html']);
});

gulp.task('default', [
  'build-appCSS',
  'build-libCSS',
  'build-appJS',
  'build-libJS',
  'build-html',
  'watch'
]);