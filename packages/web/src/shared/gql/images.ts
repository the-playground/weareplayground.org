export const queryImage = `
    asset {
        url
        metadata {
            dimensions {
                width
                height
            }
        }
    }
`;

export const queryBackgroundImage = `
    asset {
        url
        metadata {
            lqip
        }
    }
`;

export const queryImageWithAlt = `
    alt
    asset {
        url
        metadata {
            lqip
            dimensions {
                width
                height
            }
        }
    }
`;

export const queryImageWithFullMeta = `
    alt
    asset {
        url
        metadata {
            lqip
            dimensions {
                width
                height
            }
        }
    }
    caption
    credit
`;
