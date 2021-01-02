import { compareDesc, parseISO } from 'date-fns';
import { SortableShows } from '../types';

/**
 * Sort shows from newest to oldest based on their performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShows = (shows: any): any =>
    shows.sort((a: any, b: any) => {
        const performanceA = a.closeDate;
        const performanceB = b.closeDate;

        if (!performanceA || !performanceB) {
            return 0;
        }

        const dateA = parseISO(a.closeDate);
        const dateB = parseISO(b.closeDate);

        return compareDesc(dateA, dateB);
    });

/**
 * Sort performances
 */

/**
 * Filter out active shows from archive
 */
