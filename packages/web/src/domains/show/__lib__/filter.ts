import { isFuture, isPast, parseISO } from 'date-fns';
import { ComparableShow } from '../types';

export const filterForFutureShows = (
    shows: ComparableShow[]
): ComparableShow[] =>
    shows.filter(({ closeDate }) => {
        const date = parseISO(closeDate);
        return isFuture(date);
    });

export const filterForPastShows = (shows: ComparableShow[]): ComparableShow[] =>
    shows.filter(({ closeDate }) => {
        const date = parseISO(closeDate);
        return isPast(date);
    });
