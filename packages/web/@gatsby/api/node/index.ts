/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import {
    GatsbyNode,
    Actions as GatsbyNodeActions,
    BuildArgs as GatsbyNodeBuildArgs,
} from 'gatsby';

import { SEASON_ROOT_SLUG } from '@nerve/domains/season';
import { redirects } from '../../redirects';

import {
    SeasonPageConfig,
    ShowPageConfig,
    BlogPostConfig,
    SanitySeasonShowQueryData,
} from './types';

/**
 * Build a single season page
 *
 * @param {*} seasonConfig
 * @param {*} createPage
 */
const buildSeasonPage = async (
    seasonConfig: SeasonPageConfig,
    createPage: GatsbyNodeActions['createPage']
) => {
    console.log(`🗓️  Season: ${seasonConfig.url}`);

    await createPage({
        path: seasonConfig.url,
        component: seasonConfig.template,
        context: {
            id: seasonConfig.id,
            slug: seasonConfig.slug,
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
const buildShowPage = async (
    showConfig: ShowPageConfig,
    createPage: GatsbyNodeActions['createPage']
) => {
    console.log(`🎭 Show: ${showConfig.url}`);

    await createPage({
        path: showConfig.url,
        component: showConfig.template,
        context: {
            seasonID: showConfig.season.id,
            seasonSlug: showConfig.season.slug,
            seasonURL: showConfig.season.url,
            slug: showConfig.slug,
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
const getBlogPostParentPage = async (
    graphql: GatsbyNodeBuildArgs['graphql'],
    reporter: GatsbyNodeBuildArgs['reporter']
) => {
    console.log(`👨‍👧‍👧 Retrieving "Blog" parent page slug...`);

    const { data, errors }: any = await graphql(`
        query {
            sanityLinkMapConfig {
                blogPage {
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const blogPostParentPage = data.sanityLinkMapConfig.blogPage;

    if (errors || !blogPostParentPage || !blogPostParentPage.slug) {
        reporter.panicOnBuild(
            `🔥 Error attempting to retrieve "Blog" posts parent page.`
        );
        return;
    }

    return blogPostParentPage.slug.current;
};

/**
 * Build a single blog page
 *
 * @param {*} showConfig
 * @param {*} createPage
 */
const buildBlogPost = async (
    blogConfig: BlogPostConfig,
    createPage: GatsbyNodeActions['createPage']
) => {
    console.log(`✏️ Blog: ${blogConfig.url}`);

    await createPage({
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
const generateSeasonsAndShows: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
    reporter,
}) => {
    // Query Season and Show data
    const { data, errors } = await graphql<SanitySeasonShowQueryData>(`
        {
            allSanitySeason {
                nodes {
                    _id
                    slug {
                        current
                    }

                    shows {
                        _id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild(
            `🔥 Error while running GraphQL query on Seasons & Shows.`
        );
    }

    /**
     * Begin building Season pages
     */
    console.log(`🚀 Begin creating dynamic Season and Show pages...`);

    const { createPage } = actions;

    await data?.allSanitySeason.nodes.forEach(async (season) => {
        const seasonConfig: SeasonPageConfig = {
            slug: season.slug.current,
            url: `/${SEASON_ROOT_SLUG}/${season.slug.current}`,
            id: season._id,
            template: require.resolve(
                `../../../src/domains/season/template/SeasonTemplate.tsx`
            ),
        };

        buildSeasonPage(seasonConfig, createPage);

        // Bail if there are no shows linked to the season
        if (!season.shows) {
            console.log(
                `The season ${season.slug} was created successfully but there are no shows to link to it.`
            );
            return;
        }

        /**
         * Begin building pages for each Show in the current Season
         */
        season.shows.forEach((show) => {
            const showConfig: ShowPageConfig = {
                slug: show.slug.current,
                url: `${seasonConfig.url}/${show.slug.current}`,
                id: show._id,
                template: require.resolve(
                    `../../../src/domains/show/template/ShowTemplate.tsx`
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
const generateBlogPosts: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
    reporter,
}) => {
    const blogParentPage = await getBlogPostParentPage(graphql, reporter);

    // Query Blog data
    const { data, errors }: any = await graphql(`
        {
            allPrismicPost {
                nodes {
                    id
                    uid
                }
            }
        }
    `);

    if (errors) {
        reporter.panicOnBuild(`🔥 Error while running GraphQL query on Blogs.`);
    }

    /**
     * Begin building Blog pages
     */

    const { createPage } = actions;

    await data.allPrismicPost.nodes.forEach((post: any) => {
        const blogConfig: BlogPostConfig = {
            slug: post.uid,
            url: `/${blogParentPage}/${post.uid}`,
            id: post.id,
            template: require.resolve(
                `../../../src/domains/blog/template/PostTemplate.tsx`
            ),
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
const generateRedirects: GatsbyNode['createPages'] = async ({ actions }) => {
    // Build all app redirects
    const { createRedirect } = actions;
    await redirects.forEach((redirect) => createRedirect(redirect));
};

/**
 * When Gatsby attempts to crete pages, run the requested functionality
 */

export const createPages: GatsbyNode['createPages'] = async (params) => {
    await Promise.all([
        generateRedirects(params),
        generateSeasonsAndShows(params),
        generateBlogPosts(params),
    ]);
};
