import { useConfigContext, useEnvironmentContext } from '@nerve/shared/context';
import { getCurrentRootURL } from '@nerve/shared/lib';

/**
 * Get the current URL of a given page.
 *
 * This hook has a preferred way of working but also offers a fallback method.
 * 1. it is preferred to use the predefined primary website URL from the
 * site config context and a provided pathname to generate the URL.
 *
 * 2. If for whatever reason no pathname is provided, we fallback to getting
 * the current url based on window attributes.
 *
 * @param path The pathname to append to the main site URL
 * @return currentURL The current page URL
 */
export const useCurrentURL = (path?: string): string => {
    const { company } = useConfigContext();
    const { app } = useEnvironmentContext();

    // Default to the site defined in our CMS and fall back to the prod url from deploy context
    const liveURL = app.prodURL ?? company.website;

    const currentURL =
        liveURL && path ? `${liveURL}${path}` : getCurrentRootURL();

    return currentURL;
};
