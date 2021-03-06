const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("babel", () => {
    return gulp.src("./es6/**/*.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});