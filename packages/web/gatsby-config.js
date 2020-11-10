// Prismic Data Schemas
const dotenv = require('dotenv'); // eslint-disable-line @typescript-eslint/no-var-requires
const schemas = require('./@app/data/prismic-schemas'); // eslint-disable-line @typescript-eslint/no-var-requires

// Config environment variables
dotenv.config({ path: `.env` });

/**
 * Get information about the current environment so w can share important
 * details to various facets of our application.
 */

const deployURL = process.env.DEPLOY_PRIME_URL || '';
const prodURL = process.env.URL || '';
const appVersion = process.env.npm_package_version;
const deployContext = process.env.CONTEXT || '';
const deployID = process.env.DEPLOY_ID || '';
const commitRef = process.env.COMMIT_REF || '';
const prevCommitRef = process.env.CACHED_COMMIT_REF || '';
const environment = deployContext || 'development';
const isDev = environment === 'development';
const isProd = environment === 'production';

//  Todo: isNetlifyPreview (for deploy-preview and branch-deploy)
//  Todo: isStaging (one we get a staging environment set up)

module.exports = {
    siteMetadata: {
        appVersion,
        environment,
        prodURL,
        deployURL,
        deployContext,
        deployID,
        commitRef,
        prevCommitRef,
        isDev,
        isProd,
    },
    plugins: [
        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-typescript
         */
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                // Add any options here
            },
        },

        /**
         * Simplify redirect & header generation on Netlify
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
         */
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                // Custom options currently not in use
            },
        },

        /**
         * The official Sentry implementation for Gatsby
         * @link https://docs.sentry.io/platforms/javascript/guides/gatsby/
         */
        // TODO - build custom tags with env variables (most likely will do this in gatsby-browser.js)
        // https://docs.sentry.io/platforms/javascript/enriching-events/tags/
        {
            resolve: '@sentry/gatsby',
            options: {
                dsn: process.env.SENTRY_DSN,
                // A rate of 1 means all traces will be sent, so it's good for testing.
                // In production, you'll likely want to either choose a lower rate or use `tracesSampler` instead (see below).
                // tracesSampleRate: isNetlifyProduction ? 0.5 : 1,
            },
        },

        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: false,
            },
        },

        /**
         * Implement the babel module resolver for a really nice global import syntax
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-module-resolver
         */
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: '', // <- will be used as a root dir
                aliases: {
                    '@app/config': './@app/config',
                    '@nerve/core': './src/core',
                    '@nerve/domains': './src/domains',
                    '@nerve/assets': './src/assets',
                    '@nerve/shared': './src/shared',
                },
            },
        },

        /**
         * Styled Components support
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/
         */
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },

        /**
         * Query data from our CMS
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-source-prismic
         */
        {
            resolve: 'gatsby-source-prismic',
            options: {
                /**
                 * The name of your prismic.io repository. This is required.
                 */
                repositoryName: 'thenerveweb',

                /**
                 * Provide an object of Prismic custom type JSON schemas to load into
                 * Gatsby. This is required.
                 */
                schemas,

                /**
                 * Set a default language when fetching documents. The default value is
                 * '*' which will fetch all languages.
                 *
                 * @link https://prismic.io/docs/javascript/query-the-api/query-by-language
                 */
                lang: 'en-us',

                /**
                 * Set a function to determine if images are downloaded locally and made
                 * available for gatsby-transformer-sharp for use with gatsby-image.
                 * The document node, field key (i.e. API ID), and field value are
                 * provided to the function, as seen below. This allows you to use
                 * different logic for each field if necessary.
                 *
                 * This defaults to always return false.
                 */
                shouldDownloadImage: ({ key }) => {
                    // For any field that includes the word "hero", we are going to process locally to
                    // open up expanded image loading capabilities as per the `gatsby-source-prismic` docs.
                    return !!key.includes('hero');
                },

                /**
                 * Provide a default set of Imgix image transformations applied to
                 * Imgix-backed gatsby-image fields. These options will override the
                 * defaults set by Prismic.
                 * https://docs.imgix.com/apis/url
                 */

                imageImgixParams: {
                    q: 90,
                },

                /**
                 * Provide a default set of Imgix image transformations applied to
                 * the placeholder images of Imgix-backed gatsby-image fields. These
                 * parameters will be applied over those provided in the above
                 * `imageImgixParams` option.
                 *
                 * @link https://docs.imgix.com/apis/url
                 */
                imagePlaceholderImgixParams: {
                    w: 50,
                    blur: 100,
                },
            },
        },

        /**
         * Query data from our CMS
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-source-sanity
         */
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
                overlayDrafts: isDev,
                watchMode: isDev,
            },
        },

        /**
         * A helper plugin for subscribing new email addresses to a Mailchimp email list.
         *
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
         */
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    process.env.GATSBY_MAILCHIMP_NEWSLETTER_SUBSCRIBE_ENDPOINT,
            },
        },

        /**
         * Handle dynamic robots.txt generation across production, dev, & PR preview URLs.
         * This will prevent crawlers hitting our site at all URL other than our
         * production site.
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
         */
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => environment,
                env: {
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }],
                        sitemap: null,
                    },
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
         */
        `gatsby-plugin-react-helmet`,

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
         */
        `gatsby-plugin-sharp`,

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-transformer-sharp
         */
        `gatsby-transformer-sharp`,

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
         */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `The Nerve Theatre`,
                short_name: `Nerve`,
                start_url: `/`,
                background_color: `#0C1E31`,
                theme_color: `#F25C05`,
                display: `standalone`,
                icon: 'static/icons/nerve-site-icon.png',
            },
        },
    ],
};
