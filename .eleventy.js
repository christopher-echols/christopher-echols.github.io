module.exports = function(eleventyConfig) {
  // More explicit configuration
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  
  // If you also have JS and images folders:
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  
  // For any other static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};