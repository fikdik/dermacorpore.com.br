const analytics = require("./content/settings/analytics.json")
const manifest = require("./content/settings/manifest.json")
const siteMetadata = require("./content/settings/siteMetadata.json")
const googleFonts = require("./content/theme/google_fonts.json")
const palette = require("./content/theme/palette.json")

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": `${__dirname}/src`,
        content: `${__dirname}/content`,
      },
    },

    // DATA
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 100,
              maxWidth: 1200,
            },
          },
        ],
      },
    },

    // Styles
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: `${palette["nprogress"][0]}`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-svg-sprite",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: Object.keys(googleFonts).map(k => googleFonts[k].family),
        },
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        //develop: process.env.NODE_ENV === "development",
        tailwind: true,
        purgeOnly: ["src/styles/index.css"],
      },
    },

    // SEO
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: analytics.trackingId,
        // Setting this parameter is optional
        anonymize: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        ...manifest,
        display: "standalone",
        icon: `${__dirname}/static${manifest.icon}`,
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: siteMetadata.siteUrl,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "580e9643d0f23f0cd8dc646a",
      },
    },

    "gatsby-plugin-sitemap",

    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true, // Netlify hosting
        publicPath: `_admin`,
        htmlTitle: `Netlify CMS Panel`,
        // htmlFavicon: `/icons/icon-48x48.png`,
        manualInit: true,
      },
    },

    "gatsby-plugin-offline",
  ],
}
