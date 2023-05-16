'use strict';

export const paths = {
  root: './dist',

  styles: {
    src: './src/scss/main.scss',
    dest: './dist/css',
    watch: './src/scss/**/*.scss',
  },

  scripts: {
    src: './src/js/main.js',
    dest: './dist/js',
    watch: './src/js/**/*.js',
  },
};

const production = process.argv.includes('--production');

export const props = {
  production: production,

  browserSync: {
    server: paths.root,
    host: '192.168.157.233',
    watch: true,
    open: false,
  },
};
