import { SanityImage } from '@nerve/shared/types';

export const useSEOConfig = (): ISEOConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanitySeoConfig } = useStaticQuery(graphql`
        query SEOConfigQuery {
            sanitySeoConfig(_id: { eq: "seoConfig" }) {
                fallbackPageMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
                fallbackPostMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
                fallbackSeasonMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
                fallbackShowMetaImage {
                    alt
                    asset {
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                        url
                    }
                }
            }
        }
    `);

    return sanitySeoConfig;
};

export interface ISEOConfig {
    fallbackPageMetaImage: SanityImage;
    fallbackPostMetaImage: SanityImage;
    fallbackSeasonMetaImage: SanityImage;
    fallbackShowMetaImage: SanityImage;
}
