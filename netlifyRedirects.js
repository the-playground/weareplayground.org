/**
 * This file contains redirect configs that will ultimately get passed to
 * Netlify at build time via `gatsby-plugin-netlify`. This is much cleaner
 * than managing Netlify's native `_redirects` file.
 *
 * @link https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
 */
export default [
    // Redirect Netlify URL to final production URL
    {
        fromPath: 'https://thenerve.netlify.app/*',
        toPath: 'https://nervetheatre.org/:splat',
        statusCode: 301,
        isPermanent: true,
    },

    // Temp redirect since /blog doesn't exist
    {
        fromPath: '/blog',
        toPath: '/',
        statusCode: 301,
        isPermanent: true,
    },

    /**
     * Old Playground WP Site Redirects
     */

    /**
     * Post-launch redirects from added or removed pages, projects etc
     */
];
