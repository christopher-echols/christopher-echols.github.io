module.exports = function(eleventyConfig) {

  // Explicit configuration
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });
 
  // Add CNAME file to be copied to the output
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};