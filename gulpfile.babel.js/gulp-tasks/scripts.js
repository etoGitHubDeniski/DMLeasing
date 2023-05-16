'use strict';

import { paths, props } from '../config';
import { dest, src, task } from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

const webpackConfig = require('../../webpack.config');

webpackConfig.mode = props.production ? 'production' : 'development';
webpackConfig.devtool = props.production ? false : 'source-map';

task('scripts', () => {
  return src(paths.scripts.src)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest(paths.scripts.dest));
});
