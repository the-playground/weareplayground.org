import { SanityImage } from '@nerve/shared/types';

export const seoConfigQuery = `*[_type == "seoConfig"][0] {
    "fallbackPageMetaImage": {
        "alt": fallbackPageMetaImage.alt,
        "url": fallbackPageMetaImage.asset->url,
        "dimensions": fallbackPageMetaImage.asset->metadata.dimensions{
            width,
            height
        }
    },
    "fallbackPostMetaImage": {
        "alt": fallbackPostMetaImage.alt,
        "url": fallbackPostMetaImage.asset->url,
        "dimensions": fallbackPostMetaImage.asset->metadata.dimensions{
            width,
            height
        }
    },
    "fallbackSeasonMetaImage": {
        "alt": fallbackSeasonMetaImage.alt,
        "url": fallbackSeasonMetaImage.asset->url,
        "dimensions": fallbackSeasonMetaImage.asset->metadata.dimensions{
            width,
            height
        }
    },
    "fallbackShowMetaImage": {
        "alt": fallbackShowMetaImage.alt,
        "url": fallbackShowMetaImage.asset->url,
        "dimensions": fallbackShowMetaImage.asset->metadata.dimensions{
            width,
            height
        }
    },
}`;

export interface ISEOConfig {
    fallbackPageMetaImage: SanityImage;
    fallbackPostMetaImage: SanityImage;
    fallbackSeasonMetaImage: SanityImage;
    fallbackShowMetaImage: SanityImage;
}
