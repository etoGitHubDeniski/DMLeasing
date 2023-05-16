'use strict';

import { parallel, series } from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp-tasks');

export const build = parallel(['styles', 'scripts']);

export const dev = series(build, 'watch');

export default series('clean', build);
