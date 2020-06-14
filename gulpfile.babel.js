// THIS IS NOT BEING USED AS OF 06/14/2020
// The purpose of this file is to build all of the src directories, and chrome extension files (e.g. manifest.json) into
// the dist folder. At the time of writing, one of the dependencies in the gulp script was calling an outdated version of
// @babel/core, which was overriding the version we use in this app. Rather than find the dependency that was causing the issue
// I just rewrote the webpack.config.js to build from all 3 folders in src. 
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import popupWebpackConfig from './src/popup/webpack.config';
import eventWebpackConfig from './src/event/webpack.config';
import contentWebpackConfig from './src/content/webpack.config';

gulp.task('popup-js', gulp.series('clean'), (cb) => {
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('event-js', gulp.series('clean'), (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('content-js', gulp.series('clean'), (cb) => {
  webpack(contentWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('popup-html', gulp.series('clean'), () => {
  return gulp.src('popup/src/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy-manifest', gulp.series('clean'), () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('build', gulp.series('copy-manifest', 'popup-js', 'popup-html', 'event-js', 'content-js'));

// gulp.task('watch', ['default'], () => {
//   gulp.watch('popup/**/*', ['build']);
//   gulp.watch('content/**/*', ['build']);
//   gulp.watch('event/**/*', ['build']);
// });

gulp.task('default', gulp.series('build'));
