module.exports = {
  siteMetadata: {
    title: "IEEE | GEC Thrissur",
    description: "IEEE Website GEC Thrissur",
    author: "IEEE SB GEC Thrissur",
    siteUrl: "https://ieee.gectcr.ac.in",
  },
  pathPrefix: "/web-core",
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-52SLBZRN2B", // Google Analytics / GA
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://ieee.gectcr.ac.in`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IEEE Website GEC Thrissur`,
        short_name: `IEEE GECT`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        // icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-sitemap`,
    // Commented this plugin to prevent service worker as our server does not support https as of now
    // Uncomment it when https is available
    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ["**/icons*"],
    //     },
    //   },
    // },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
  ],
}
