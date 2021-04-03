module.exports = {
  siteMetadata: {
    title: `Arena Analytics`,
    siteUrl: `https://www.arena-analytics.com/#about`,
    description: `Consultoria de inteligencia artificial`,
    keywords:`analytics, consultoria`,
    author: `gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tuez5ho5t4m9`,
        accessToken: `7yhrhqPBF_N4XeAq_U7r4ggnWB42LfYILmzqExkakog`,
        // host: `preview.contentful.com`,
        // accessToken: `XhMFcGfDacsYA6H4jCPNV2M7LEFRxGwgE8vYfFmMejE`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
