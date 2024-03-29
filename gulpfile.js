/*
 * author: david ( deggs.k@gmail.com )
 */
'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var shell = require('gulp-shell');
// var livereload = require('gulp-livereload');

gulp.task('default', ['serve']);

// run server for development
gulp.task('serve', function (cb) {
  nodemon({
    script: 'app.js',
    execMap: {
      js: "node --harmony"
    }
    // env: {NODE_ENV: 'development'}
    // watch   : <server files>
    //...add nodeArgs: ['--debug=5858'] to debug 
    //..or nodeArgs: ['--debug-brk=5858'] to debug at server start
  }).on('restart', function () {
    process.stdout.write('Server restart!');
  });
});

// excute unit test
// gulp.task('test', shell.task([
//       'mocha --harmony -t 5000'
//     ], {env: {'NODE_ENV': 'test'}})
// );

// gulp.task('test', function () {
//   return gulp.src('test/*.js', {read: false})
//     .pipe(mocha())
//     .once('error', function (e) {
//       process.stdout.write(e);
//       process.stdout.write('Error - You should run tests by: gulp test --harmony');
//       process.exit(1);
//     })
//     .once('end', function () {
//       process.exit();
//     });
// });

// gulp.task('startReloadServer', function() {
//     console.log('start');
//     livereload.listen();
//     console.log('start end');
// });

