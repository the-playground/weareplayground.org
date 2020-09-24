import { PrismicImage } from '@type/prismic';

import { SiteConfig } from '@hooks';
import { useConfigContext } from '@context';

/**
 * Retrieve a fallback meta image from the site config based on the content type
 *
 * @param type The content type to get the fallback image for
 * @param siteConfig The config object for the app
 */
const getFallbackImage = (
    type: MetaImageContentType,
    siteConfig: SiteConfig
): PrismicImage => {
    switch (type) {
        case 'page':
            return siteConfig.fallback_page_meta_image;

        case 'season':
            return siteConfig.fallback_season_meta_image;

        case 'show':
            return siteConfig.fallback_season_meta_image;

        default:
            return siteConfig.fallback_page_meta_image;
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
    image?: PrismicImage
): PrismicImage => {
    const siteConfig = useConfigContext();

    const metaImage = image?.url ? image : getFallbackImage(type, siteConfig);

    return metaImage;
};

type MetaImageContentType = 'page' | 'season' | 'show';
