import { GatsbyConfig } from 'gatsby';

import dotenv from 'dotenv';

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

export default <GatsbyConfig>{
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
                    '@app': './@app',
                    '@gatsby': './@gatsby',
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
         * @link https://www.gatsbyjs.org/packages/gatsby-source-sanity
         */
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: process.env.GATSBY_SANITY_PROJECT_ID,
                dataset: process.env.GATSBY_SANITY_DATASET,
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
