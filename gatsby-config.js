const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

    plugins: [

      /**
       * @link
       * @since 1.0.0
       */
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `static`, `images`),
        },
      },

      /**
       * @link
       * @since 1.0.0
       */
      `gatsby-plugin-sharp`,

      /**
       * @link
       * @since 1.0.0
       */
      `gatsby-transformer-sharp`,

      /**
       * @link
       * @since 1.0.0
       */
      `gatsby-plugin-sharp`,

      /**
       * @link
       * @since 1.0.0
       */
      `gatsby-transformer-sharp`,

      /**
       * @link https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
       * @since 1.0.0
       */
      `gatsby-plugin-react-helmet`,

      /**
       * Styled Components support
       *
       * @link https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/
       * @since 1.0.0
       */
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },

      /**
       * @link
       * @since 1.0.0
       */
        {
          resolve: 'gatsby-source-prismic-graphql',
          options: {
            repositoryName: 'theplayground', // (required)
            accessToken: process.env.PRISMIC_API_TOKEN, // (optional)
            previews: false, // (optional, default: false)
            pages: [{
              type: 'Show',         // TypeName from prismic
              match: '/shows/:uid',  // Pages will be generated under this pattern (optional)
              path: '/show-preview',        // Placeholder page for unpublished documents
              component: require.resolve('./src/templates/show.js'),
            }]
          }
        },

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
         * @since 1.0.0
         */
        {
          resolve: `gatsby-plugin-manifest`, // add icon 512x512 -- svg
          options: {
            name: `The Playground`,
            short_name: `Playground`,
            start_url: `/`,
            background_color: `#303030`,
            theme_color: `#5DA460`,
            display: `standalone`,
          }
      },

      /**
       * @link
       * @since 1.0.0
       */
      {
          resolve: `gatsby-plugin-offline`,
          options: {
            precachePages: [],
          },
	  },

	  /**
	   * Robots.txt Handler
	   *
       * @link https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
       * @since 1.0.0
       */
	  {
		resolve: 'gatsby-plugin-robots-txt',
		options: {
		  host: 'https://weareplayground.org',
		  sitemap: 'https://weareplayground.org/sitemap.xml',
		  env: {
			development: {
			  policy: [{ userAgent: '*', disallow: ['/'] }]
			},
			production: {
			  policy: [{ userAgent: '*', allow: '/' }]
			}
		  }
		}
	  }
    ]

}
