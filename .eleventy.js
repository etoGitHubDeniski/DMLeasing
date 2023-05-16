const prettier = require('prettier');

module.exports = function (eleventyConfig) {
  // Форматирование html
  eleventyConfig.addTransform('prettier', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      return prettier.format(content, { parser: 'html', printWidth: 140 });
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'site/includes',
      layouts: 'site/layouts',
      data: 'site/data',
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
