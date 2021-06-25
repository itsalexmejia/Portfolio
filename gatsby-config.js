module.exports = {
  siteMetadata: {
    title: `Arena Analytics`,
    siteUrl: `https://www.arena-analytics.com/#about`,
    description: `Somos una firma de consultoría especializada en transformar la Cadena de Valor de nuestros clientes.`,
    keywords:`analytics, consultoria`,
    author: `Alex Mejia`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arena Analytics`,
        short_name: `Arena Analytics`,
        description: `Somos una firma de consultoría especializada en transformar la Cadena de Valor de nuestros clientes.`,
        start_url: `/`,
        background_color: `#601b4d`,
        theme_color: `#601b4d`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
