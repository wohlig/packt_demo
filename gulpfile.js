var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("default", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
