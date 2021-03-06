module.exports = {
  siteMetadata: {
    title: "IEEE | GEC Thrissur",
    description: "IEEE Website GEC Thrissur",
    author: "IEEE SB GEC Thrissur",
    // siteUrl: "https://www.example.com",
  },
  pathPrefix: "/IEEE-GECT-Website",
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.example.com`,
    //   },
    // },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
