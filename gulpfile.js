const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("default", () => {
    return gulp.src("script.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});