import compareDesc from 'date-fns/compareDesc';
import parseISO from 'date-fns/parseISO';
import { ShowSnippet } from '@type/show';

/**
 * Sort shows from newest to oldest based on their performance dates
 *
 * @param shows An array of shows to sort
 */
export const sortShows = (shows: ShowSnippet[]) =>
    shows.sort((a, b) => {
        const dateA = parseISO(a.data.performances![0].datetime);
        const dateB = parseISO(b.data.performances![0].datetime);

        return compareDesc(dateA, dateB);
    });

/**
 * Sort performances
 */

/**
 * Filter out active shows from archive
 */
