'use strict';

import { props } from '../config';
import { task } from 'gulp';
import browserSync from 'browser-sync';

task('serve', () => {
  browserSync.init(props.browserSync);
});
