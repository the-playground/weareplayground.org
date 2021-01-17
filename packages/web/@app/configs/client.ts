export const clientConfig = {
    sanity: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'sanity-projectID',
        dataset: process.env.GATSBY_SANITY_DATASET || 'sanity-dataset',
    },
};
