/**
 * Add Eleventy collections here
 * https://www.11ty.dev/docs/collections/
*/

export default {

  /**
   * Articles
   */
  articles: async function (eleventyConfig) {
    eleventyConfig.addCollection("articles", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/content/articles/**/*.md");
    });
  },

  /**
   * Pages
   */
  pages: async function (eleventyConfig) {
    eleventyConfig.addCollection("pages", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/content/pages/**/*.md");
    });
  }
}
