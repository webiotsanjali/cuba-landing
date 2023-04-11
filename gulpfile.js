const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();
const livereload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps');
const reload = browsersync.reload;
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  css: {
    src: './assets/scss/**/*.scss',
    dest: './assets/css',
  },
};

/// vendors js ///
gulp.task('js_file', function () {
  return gulp.src(
      [
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/swiper/swiper-bundle.min.js',
      ], {
        base: 'node_modules',
        "allowEmpty": true
      })
    .pipe(gulp.dest('./assets/js/vendors/'));
});

/// vendors css ///
gulp.task('css_file', function () {
  return gulp.src(
      [
        './node_modules/swiper/swiper.min.css',
        './node_modules/swiper/swiper-bundle.min.css',
      ], {
        base: 'node_modules',
        "allowEmpty": true
      })
    .pipe(sass({}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/vendors/'));
});

/// Style Task ///
gulp.task('scss', (e) => {
  return gulp
    .src(paths.css.src)
    .pipe(autoprefixer())
    .pipe(sourcemaps.init())
    .pipe(sass({
      //  outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest("./assets/css"))
    .pipe(browsersync.stream())
    .pipe(livereload());
  done();
});

/// Browser Sync Task ///
gulp.task('browser-sync', async function (done) {
  browsersync.init({
    base: './',
    server: './',
    startPath: 'html/index.html',
    host: 'localhost',
    open: true,
    tunnel: false,
  });
  gulp.watch("html/*.html").on("change", reload);
  // done();
});

/// Watch function ///
gulp.task(
  'default',
  gulp.series('css_file', 'js_file', 'scss', 'browser-sync', function () {
    gulp.watch(['./assets/scss/**/*.scss'], gulp.series('scss', 'js_file', 'css_file'));
    livereload.listen();
  }),
);