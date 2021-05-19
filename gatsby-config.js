module.exports = {
  siteMetadata: {
    title: "Nicole Azurduy",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        additionalData: `@use "./variables" as var`
      }
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
