/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * Build a single season page
 *
 * @param {*} seasonConfig
 * @param {*} createPage
 */
function buildSeasonPage(seasonConfig, createPage) {
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
}

/**
 * Build a single show page
 *
 * @param {*} showConfig
 * @param {*} createPage
 */
function buildShowPage(showConfig, createPage) {
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
}

/**
 * Query all available seasons and shows and dynamically
 * generate pages from the results
 *
 * @param {*} params destructured instances of createPages params
 */
async function generateSeasonsAndShows({ graphql, actions, reporter }) {
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
            template: require.resolve(`./src/templates/SeasonTemplate.tsx`),
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
                template: require.resolve(`./src/templates/ShowTemplate.tsx`),
                season: seasonConfig,
            };

            buildShowPage(showConfig, createPage);
        });
    });
    console.log(`🎉 Done creating Season and Show pages!`);
}

/**
 * When Gatsby attempts to crete pages, run the requested functionality
 */
exports.createPages = async (params) => {
    await Promise.all([generateSeasonsAndShows(params)]);
};
