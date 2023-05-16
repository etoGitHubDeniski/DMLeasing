'use strict';

import { paths, props } from '../config';
import { dest, src, task } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

task('styles', () => {
  return src(paths.styles.src, { sourcemaps: !props.production })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(paths.styles.dest, { sourcemaps: '.' }));
});
