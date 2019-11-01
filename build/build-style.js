const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const fs = require('fs');
 
function delDir(p) {
    
    // 读取文件夹中所有文件及文件夹
    var list = fs.readdirSync(p);
    list.forEach((v, i) => {
      // 拼接路径
        var url = p + '/' + v;
      // 读取文件信息
        var stats = fs.statSync(url);
      // 判断是文件还是文件夹
        if (stats.isFile()) {
        // 当前为文件，则删除文件
            fs.unlinkSync(url);
        } else {
        // 当前为文件夹，则递归调用自身
            arguments.callee(url);
        }
    });
    // 删除空文件夹
    fs.rmdirSync(p);
}
  
gulp.task('clean', function () {
    if(!fs.existsSync('../dist')){
        return;
    }
    delDir('../dist');
    if(!fs.existsSync('../dist')){
        return;
    }
    fs.rmdirSync('../dist');
});

// 编译less
gulp.task('css', function () {
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('marisfrolg_iview.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['clean','css', 'fonts']);
