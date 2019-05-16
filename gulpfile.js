const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename'),
	  clean = require('gulp-clean-css'),
	  imgmin = require('gulp-imagemin'),
	  uglify = require('gulp-uglify');

gulp.task('css',()=>{
	gulp.src('src/sass/*.scss')
	    .pipe(sass())
	    .pipe(clean())
	    .pipe(rename({"suffix" : ".min"}))
	    .pipe(gulp.dest('./dist/css'))
})
gulp.task('img',()=>{
	gulp.src('src/image/*.*')
		  .pipe(imgmin())
		  .pipe(rename({'suffix' : 'min'}))
		  .pipe(gulp.dest('./dist/img'));
})
gulp.task('img2',()=>{
	gulp.src('src/image2/*.*')
		  .pipe(imgmin())
		  .pipe(rename({'suffix' : 'min'}))
		  .pipe(gulp.dest('./dist/img2'));
})

gulp.task('js',()=>{
	gulp.src('src/js/*.js')
			.pipe(uglify())
			.pipe(rename({'suffix' : ".min"}))
			.pipe(gulp.dest('dist/js'));
})
gulp.task('default',()=>{
	gulp.watch('src/sass/*.scss',['css']);
	gulp.watch('src/image/*.*',['img']);
	gulp.watch('src/image2/*.*',['img2']);
	gulp.watch('src/js/*.js',['js']);
})
