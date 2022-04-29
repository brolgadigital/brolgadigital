require("dotenv").config({
    path: ".env.${process.env.NODE_ENV}",
});

const path = require("path");
const config = require("./brolga-config");

const here = (...p) => path.join(__dirname, ...p);

const strapiConfig = {
    apiURL: process.env.API_URL,
    // accessToken: process.env.TOKEN,
    collectionTypes: ['post', 'category', 'product', 'tag', 'page'],
    singleTypes: [],
};

module.exports = {
    siteMetadata: {
        url: config.siteUrl,
        siteUrl: config.siteUrl,
        title: config.siteTitle,
        // twitterHandle: config.twitterHandle,
        description: config.siteDescription,
        keywords: [
            "Software Engineer",
            "React Training",
            "Testing JavaScript Training",
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
            fbAppID: "",
        },
    },
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "334753701576651",
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `blog`,
        //         path: `${__dirname}/content/blog`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `portfolio`,
        //         path: `${__dirname}/content/portfolio`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `downloads`,
        //         path: `${__dirname}/content/downloads`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },

        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",

        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    // 'gatsby-remark-relative-images-v2',
                    //   'gatsby-remark-relative-images',
                    // {
                    //     resolve: "gatsby-remark-relative-images",
                    //     options: {
                    //       name: "uploads",
                    //     },
                    //   },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "assets",
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
        // "gatsby-plugin-netlify-cms",
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/brolga-red-01.png",
            },
        },

        "react-feather",
        "react-slideshow-image",
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: [
                    "G-VFZCRFC58Q",
                    "UA-201801796-1",
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
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -50,
            },
        },
        {
            resolve: 'gatsby-plugin-htaccess',
            options: {
                https: true,
                www: false,
                SymLinksIfOwnerMatch: true,
                host: 'brolgadigital.com.au',
                custom: `
                    # BROWSER CACHING USING CACHE-CONTROL HEADERS
                    <ifModule mod_headers.c> 
                        # One year for image and video files
                        <filesMatch ".(flv|gif|ico|jpg|jpeg|mp4|mpeg|png|svg|swf|webp)$">
                            Header set Cache-Control "max-age=31536000, public"
                        </filesMatch>

                        # One month for PDF files
                        <filesMatch ".(pdf)$">
                            Header set Cache-Control "max-age=2592000, public"
                        </filesMatch>

                        # One week for CSS and JS files
                        <filesMatch ".(css|js)$">
                            Header set Cache-Control "max-age=604800, public"
                        </filesMatch>
                    </ifModule>
                `,
            },
        },
    ],
};
