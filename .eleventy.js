module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  
  // Set Markdown library options
  let markdownIt = require("markdown-it");
  let markdownItOptions = {
    html: true,        // Enable HTML tags in source
    breaks: true,      // Convert '\n' in paragraphs into <br>
    linkify: true      // Autoconvert URL-like text to links
  };
  
  // Configure the markdown library
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};