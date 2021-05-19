import { getImage } from 'gatsby-plugin-image';

export interface GatsbyPageContext {
    id: string;
    slug: string;
}

/**
 * This isn't the most ideal solution, but since Gatsby doesn't export types for its
 * image file nodes, we need to get the type ourselves by grabbing params off of the
 * `getImage` function. Once we have the params (as a tuple), we can grab the first one
 * which is the FileNode reference.
 *
 * * NOTE: This is fragile and will break of the order of params changes. The ideal scenario
 * * would be to open a PR to export the types from `gatsby-image-plugin`
 */
type GatsbyGetImageParams = Parameters<typeof getImage>;
export type GatsbyFileNode = GatsbyGetImageParams[0];
