const path = require(`path`);

require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
});

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

        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                //   isTSX: true, // defaults to false
                //   jsxPragma: `jsx`, // defaults to "React"
                //   allExtensions: true, // defaults to false
            },
        },

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
            resolve: `gatsby-source-prismic-graphql`,
            options: {
                repositoryName: `theplayground`, // (required)
                accessToken: process.env.PRISMIC_API_KEY, // (optional)
                previews: false, // (optional, default: false)
                // Do not use. We build pages manually in gatsby-node.js
                // pages: [
                // 	{
                // 		type: 'Show', // TypeName from prismic
                // 		match: '/shows/:uid', // Pages will be generated under this pattern (optional)
                // 		path: '/show', // Placeholder page for unpublished documents
                // 		component: require.resolve('./src/templates/show.js'),
                // 	},
                // ],
                omitPrismicScript: true,
            },
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
         * ! Remember to change production policy to `allow` when we launch
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
         * @since 1.0.0
         */
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://weareplayground.org`,
                sitemap: `https://weareplayground.org/sitemap.xml`,
                env: {
                    development: {
                        policy: [{ userAgent: `*`, disallow: [`/`] }],
                    },
                    production: {
                        policy: [{ userAgent: `*`, disallow: `/` }],
                    },
                },
            },
        },
    ],
};
