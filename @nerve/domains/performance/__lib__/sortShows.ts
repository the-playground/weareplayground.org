import { compareDesc, parseISO } from 'date-fns';
import { ShowSnippet } from '@type/show';

/**
 * Sort shows from newest to oldest based on their performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShows = (shows: ShowSnippet[]) =>
    shows.sort((a, b) => {
        const performancesA = a.data.performances;
        const performancesB = b.data.performances;

        if (!performancesA || !performancesB) {
            return 0;
        }

        const finalPerformanceA =
            performancesA[performancesA.length - 1].datetime;
        const finalPerformanceB =
            performancesB[performancesB.length - 1].datetime;

        const dateA = parseISO(finalPerformanceA);
        const dateB = parseISO(finalPerformanceB);

        return compareDesc(dateA, dateB);
    });

/**
 * Sort performances
 */

/**
 * Filter out active shows from archive
 */
