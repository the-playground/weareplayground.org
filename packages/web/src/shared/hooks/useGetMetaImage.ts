import { SanityImage } from '@nerve/shared/types';

import { SEOConfig } from '@nerve/shared/hooks';
import { useConfigContext } from '@nerve/shared/context';

/**
 * Retrieve a fallback meta image from the site config based on the content type
 *
 * @param type The content type to get the fallback image for
 * @param seoConfig The config object for the app
 */
const getFallbackImage = (
    type: MetaImageContentType,
    seoConfig: SEOConfig
): SanityImage => {
    switch (type) {
        case 'page':
            return seoConfig.fallbackPageMetaImage;
        case 'post':
            return seoConfig.fallbackPostMetaImage;
        case 'season':
            return seoConfig.fallbackSeasonMetaImage;

        case 'show':
            return seoConfig.fallbackShowMetaImage;

        default:
            return seoConfig.fallbackPageMetaImage;
    }
};

/**
 * A simple hook that returns the image that is passed to it, or if no image is passed,
 * it retrieves the fallback meta image based on the content type.
 *
 * @param type The content type to get the fallback meta image for
 * @param image The meta image to use
 */
export const useGetMetaImage = (
    type: MetaImageContentType,
    image?: SanityImage
): SanityImage => {
    const { seo } = useConfigContext();

    const metaImage = image?.asset?.url ? image : getFallbackImage(type, seo);

    return metaImage;
};

type MetaImageContentType = 'page' | 'post' | 'season' | 'show';
