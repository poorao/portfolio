const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy("css");

  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addFilter("markdownify", (content) => {
    return md.render(content);
  });

  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
