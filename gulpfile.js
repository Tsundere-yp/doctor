//导入安装的模块
const gulp = require("gulp"),
      jsmin = require("gulp-uglify"),
      cssmin = require("gulp-cssnano"),
      imgmin = require("gulp-imagemin"),
      rename = require("gulp-rename"),
      babel = require('gulp-babel'), // 编译ES6
    errutil = require("gulp-util");
//js文件压缩
// gulp.task("task-js",function(){
//     //设置要压缩的js路径
//     gulp.src('./src/js/*.js')
//     //压缩
//         .pipe(jsmin({
//             compress: true,
//         }))
//     //进行重命名
//         .pipe(rename({'suffix':'min'}))
//     //进行设置出口
//         .pipe(gulp.dest('./dist'));
// })

//JS文件压缩
gulp.task('task-js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe(jsmin({
            compress: true,
        }))
        //进行重命名
        .pipe(rename({'suffix':'-min'}))
        .on('error', function (err) {
            errutil.log(errutil.colors.red('[Error]'), err.toString());
        })
        //.pipe(rev.manifest())
        .pipe(gulp.dest('./dist/js'))
});

//css文件压缩
gulp.task("task-css",function(){
    //设置要压缩的js路径
    gulp.src('./src/css/*.css')
    //压缩
        .pipe(cssmin({
            compress: true,
        }))
        //进行重命名
        .pipe(rename({'suffix':'-min'}))
        .on('error', function (err) {
            errutil.log(errutil.colors.red('[Error]'), err.toString());
        })
        //进行设置出口
        .pipe(gulp.dest('./dist/css'));
})
//图片压缩
// gulp.task('task-image',function(){
//     return gulp.src("./src/img/*.jpg")
//         .pipe(imgmin({
//             compress: true,
//         }))
//         //进行重命名
//         .pipe(rename({'suffix':'-min'}))
//         .on('error', function (err) {
//             errutil.log(errutil.colors.red('[Error]'), err.toString());
//         })
//         .pipe(gulp.dest('./dist/img'));
// });
//进行监听js
gulp.task('default',()=>{
    gulp.watch(["./src/js/*.js"],["task-js"]);
})
//进行监听css
gulp.task('default',()=>{
    gulp.watch(["./src/css/*.css"],["task-css"]);
})