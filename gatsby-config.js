const path = require('path')
const config = require('./brolga-config')

const here = (...p) => path.join(__dirname, ...p)

require("dotenv").config({
    path: '.env.${process.env.NODE_ENV}',
})

module.exports = {
  siteMetadata: {
    url: config.siteUrl,
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: [
      'Software Engineer',
      'React Training',
      'Testing JavaScript Training',
    ],
    canonicalUrl: config.siteUrl,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
      altLogo: config.altLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    {
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/static/images/uploads`,
            name: 'uploads',
        },
    },
    {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            {
                resolve: 'gatsby-remark-relative-images',
                options: {
                    name: 'uploads',
                },
            },
            {
                resolve: 'gatsby-remark-images',
                options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 2048,
                },
            },
            {
                resolve: 'gatsby-remark-copy-linked-files',
                options: {
                    destinationDir: 'static',
                },
            },
          ],
        },
    },
    {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
            modulePath: `${__dirname}/src/cms/cms.js`,
        },
    },
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
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-VFZCRFC58Q",
          // "AW-CONVERSION_ID", 
          // "DC-FLOODIGHT_ID", 
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
