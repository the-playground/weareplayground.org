/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import redirects from './@app/config/redirects.ts';

/**
 * Build a single season page
 *
 * @param {*} seasonConfig
 * @param {*} createPage
 */
const buildSeasonPage = (seasonConfig, createPage) => {
    console.log(`🗓️  Season: ${seasonConfig.url}`);

    createPage({
        path: seasonConfig.url,
        component: seasonConfig.template,
        context: {
            id: seasonConfig.id,
            uid: seasonConfig.slug,
            seasonURL: seasonConfig.url,
        },
    });
};

/**
 * Build a single show page
 *
 * @param {*} showConfig
 * @param {*} createPage
 */
const buildShowPage = (showConfig, createPage) => {
    console.log(`🎭 Show: ${showConfig.url}`);

    createPage({
        path: showConfig.url,
        component: showConfig.template,
        context: {
            seasonID: showConfig.season.id,
            seasonUID: showConfig.season.slug,
            seasonURL: showConfig.season.url,
            uid: showConfig.slug,
            id: showConfig.id,
        },
    });
};

/**
 * Query the "Blog" parent page.
 *
 * @param {*} graphql graphql instance from createPages
 * @param {*} reporter reporter instance from createPages
 */
const getBlogPostParentPage = async (graphql, reporter) => {
    console.log(`👨‍👧‍👧 Retrieving "Blog" parent page uid...`);

    const { data } = await graphql(`
        query {
            prismicSiteConfig {
                data {
                    blog_page {
                        uid
                    }
                }
            }
        }
    `);

    const blogPostParentPage = data.prismicSiteConfig.data.blog_page;

    if (data.errors || !blogPostParentPage || !blogPostParentPage.uid) {
        reporter.panicOnBuild(
            `🔥 Error attempting to retrieve "Blog" posts parent page.`
        );
        return;
    }

    return blogPostParentPage.uid;
};

/**
 * Build a single blog page
 *
 * @param {*} showConfig
 * @param {*} createPage
 */
const buildBlogPost = (blogConfig, createPage) => {
    console.log(`✏️ Blog: ${blogConfig.url}`);

    createPage({
        path: blogConfig.url,
        component: blogConfig.template,
        context: {
            uid: blogConfig.slug,
            id: blogConfig.id,
        },
    });
};

/**
 * Query all available seasons and shows and dynamically
 * generate pages from the results
 *
 * @param {*} params destructured instances of createPages params
 */
const generateSeasonsAndShows = async ({ graphql, actions, reporter }) => {
    // Query Season and Show data
    const { data } = await graphql(`
        {
            allPrismicSeason {
                nodes {
                    uid
                    id
                    data {
                        shows {
                            show {
                                id
                                uid
                            }
                        }
                    }
                }
            }
        }
    `);

    if (data.errors) {
        reporter.panicOnBuild(
            `🔥 Error while running GraphQL query on Seasons & Shows.`
        );
    }

    /**
     * Begin building Season pages
     */
    console.log(`🚀 Begin creating dynamic Season and Show pages...`);

    const { createPage } = actions;
    const URLBase = `s`;

    await data.allPrismicSeason.nodes.forEach(async (season) => {
        const seasonConfig = {
            slug: season.uid,
            url: `/${URLBase}/${season.uid}`,
            id: season.id,
            template: require.resolve(
                `./@nerve/domains/performance/templates/SeasonTemplate.tsx`
            ),
        };

        buildSeasonPage(seasonConfig, createPage);

        // Bail if there are no shows linked to the season
        if (!season.data || !season.data.shows) {
            return;
        }

        /**
         * Begin building pages for each Show in the current Season
         */
        season.data.shows.forEach(async ({ show }) => {
            const showConfig = {
                slug: show.uid,
                url: `${seasonConfig.url}/${show.uid}`,
                id: show.id,
                template: require.resolve(
                    `./@nerve/domains/performance/templates/ShowTemplate.tsx`
                ),
                season: seasonConfig,
            };

            buildShowPage(showConfig, createPage);
        });
    });
    console.log(`🎉 Done creating Season and Show pages!`);
};

/**
 * Query all available posts and dynamically and generate pages from the results,
 *
 * @param {*} params destructured instances of createPages params
 */
const generateBlogPosts = async ({ graphql, actions, reporter }) => {
    const blogParentPage = await getBlogPostParentPage(graphql, reporter);

    // Query Blog data
    const { data } = await graphql(`
        {
            allPrismicPost {
                nodes {
                    id
                    uid
                }
            }
        }
    `);

    if (data.errors) {
        reporter.panicOnBuild(`🔥 Error while running GraphQL query on Blogs.`);
    }

    /**
     * Begin building Blog pages
     */

    const { createPage } = actions;

    await data.allPrismicPost.nodes.forEach(async (post) => {
        const blogConfig = {
            slug: post.uid,
            url: `/${blogParentPage}/${post.uid}`,
            id: post.id,
            template: require.resolve(`./@nerve/domains/blog/templates/PostTemplate.tsx`),
        };

        buildBlogPost(blogConfig, createPage);
    });

    console.log(`🎉 Done creating Blog pages!`);
};

/**
 * Build redirects for our application based on the config.
 *
 * @param {*} actions destructured action instance from creatPages
 */
const generateRedirects = async ({ actions }) => {
    // Build all app redirects
    const { createRedirect } = actions;
    await redirects.forEach((redirect) => createRedirect(redirect));
};

/**
 * When Gatsby attempts to crete pages, run the requested functionality
 */
// eslint-disable-next-line
export const createPages = async (params) => {
    await Promise.all([
        generateRedirects(params),
        generateSeasonsAndShows(params),
        generateBlogPosts(params),
    ]);
};
