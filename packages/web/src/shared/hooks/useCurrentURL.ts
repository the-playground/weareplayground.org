import { useConfigContext } from '@nerve/shared/context';
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
 * TODO: Use production deploy variable from our EnvironmentContext when possible, fall back to other methods when needed
 *
 * @param path The pathname to append to the main site URL
 * @return currentURL The current page URL
 */
export const useCurrentURL = (path?: string): string => {
    const config = useConfigContext();

    const currentURL = path
        ? `${config.website.url}${path}`
        : getCurrentRootURL();

    return currentURL;
};
