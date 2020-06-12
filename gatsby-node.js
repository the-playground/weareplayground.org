/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Query Season and show data
    const query = await graphql(`
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

    if (query.errors) {
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

    const seasonTemplate = require.resolve(
        `./src/templates/SeasonTemplate.tsx`
    );
    const showTemplate = require.resolve(`./src/templates/ShowTemplate.tsx`);
    const URLBase = `s`;

    query.data.allPrismicSeason.nodes.forEach((season) => {
        const seasonSlug = season.uid;
        const seasonURL = `/${URLBase}/${seasonSlug}`;
        const seasonID = season.id;

        console.log(`✅ Season: ${seasonURL}`);

        createPage({
            path: seasonURL,
            component: seasonTemplate,
            context: {
                id: seasonID,
                uid: seasonSlug,
                seasonURL,
            },
        });

        // Bail if there are no shows linked to the season
        if (!season.data || !season.data.shows) {
            return;
        }

        // We have to use a nested forEach now to go through every show in a season and generate the pages
        season.data.shows.forEach(({ show }) => {
            const showSlug = show.uid;
            const showURL = `${URLBase}/${seasonSlug}/${showSlug}`;
            const showID = show.id;

            console.log(`✅ Show: ${showURL}`);

            createPage({
                path: showURL,
                component: showTemplate,
                context: {
                    seasonID,
                    seasonUID: seasonSlug,
                    seasonURL,
                    uid: showSlug,
                    id: showID,
                },
            });
        });
    });
    console.log(`👌🏼 Done creating season and show pages from Prismic!`);
};
