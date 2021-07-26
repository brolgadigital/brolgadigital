require("dotenv").config({
  path: '.env.${process.env.NODE_ENV}',
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://brolgadigital.com.au",
    title: "Brolga Design",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VFZCRFC58Q",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/brolga-red-01.png",
      },
    },
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
    "react-feather",
    "react-slideshow-image",
  ],
};
