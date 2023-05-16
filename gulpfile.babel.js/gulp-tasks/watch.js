'use strict';

import { paths } from '../config';
import { parallel, task, watch } from 'gulp';

task('watch', () => {
  watch(paths.styles.watch, parallel('styles'));
  watch(paths.scripts.watch, parallel('scripts'));
});
