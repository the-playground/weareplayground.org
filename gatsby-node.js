/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Query Season and show data
    const result = await graphql(`
        query SeasonShowQuery {
            prismic {
                allSeasons {
                    edges {
                        node {
                            _meta {
                                id
                                uid
                            }
                            shows {
                                show {
                                    ... on PRISMIC_Show {
                                        _meta {
                                            id
                                            uid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(
            `🔥 Error while running GraphQL query on Prismic.`
        );
        return;
    }

    /**
     * Begin Building Season Pages
     */
    console.log(
        `🙏🏼 Begin creating dynamic season and show pages from Prismic...`
    );

    const seasonTemplate = require.resolve(`./src/templates/season.tsx`);
    const showTemplate = require.resolve(`./src/templates/show.tsx`);
    const URLBase = `seasons`;

    result.data.prismic.allSeasons.edges.forEach(({ node }) => {
        // Set up season data
        const season = node;
        const seasonSlug = season._meta.uid;
        const seasonURL = `${URLBase}/${seasonSlug}`;
        const seasonID = season._meta.id;

        console.log(`✅ Season: ${seasonURL}`);

        createPage({
            path: seasonURL,
            component: seasonTemplate,
            context: {
                uid: seasonSlug,
            },
        });

        // Bail if there are no shows linked to the season.
        if (!season.shows) {
            return;
        }

        // We have to use a nested forEach now to go through every show in a season and generate the pages
        season.shows.forEach(({ show }) => {
            const showSlug = show._meta.uid;
            const showURL = `${URLBase}/${seasonSlug}/${showSlug}`;

            console.log(`✅ Show: ${showURL}`);

            createPage({
                path: showURL,
                component: showTemplate,
                context: {
                    seasonID,
                    seasonUID: seasonSlug,
                    seasonURL,
                    uid: showSlug,
                },
            });
        });
    });
    console.log(`👌🏼 Done creating season and show pages from Prismic!`);
};
