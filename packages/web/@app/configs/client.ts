export const clientConfig = {
    sanity: {
        projectId: process.env.SANITY_PROJECT_ID || '<# sanity.projectID #>',
        dataset: process.env.SANITY_DATASET || '<# sanity.dataset #>',
    },
};
