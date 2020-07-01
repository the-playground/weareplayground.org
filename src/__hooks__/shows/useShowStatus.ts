import { useState } from 'react';
import parseISO from 'date-fns/parseISO';
import sub from 'date-fns/sub';
import isPast from 'date-fns/isPast';
import isWithinInterval from 'date-fns/isWithinInterval';

import { Performance } from '@type/show';

/**
 * Using all of the available performances of a show, determine the current status.
 *
 * @param performances All of the available performances of the show.
 */
export const useShowStatus = (performances: Performance[]) => {
    const [status, setStatus] = useState('inactive');

    // If no performances are passed in, bail.
    if (!performances || performances.length === 0) {
        return { status, setStatus };
    }

    // Grab the first performance of the show and format it.
    const firstPerformance = parseISO(performances[0].datetime);

    // Grab the last performance of the show and format it.
    const lastPerformance = parseISO(
        performances[performances.length - 1].datetime
    );

    // How long before a show opens should we set the status as "upcoming"?
    const upcomingWindowStart = sub(firstPerformance, { days: 30 });

    // The full date range of a production
    const productionInterval = {
        start: firstPerformance,
        end: lastPerformance,
    };

    // The window of time where a show should be considered "coming soon"
    const comingSoonInterval = {
        start: upcomingWindowStart,
        end: sub(firstPerformance, { hours: 1 }),
    };

    const now = new Date();

    // Resolve when one of the following is true
    switch (true) {
        case isPast(lastPerformance):
            setStatus('archived');
            break;

        case isWithinInterval(now, productionInterval):
            setStatus('active');
            break;

        case isWithinInterval(now, comingSoonInterval):
            setStatus('upcoming');
            break;

        default:
            setStatus('future');
    }

    return { status, setStatus };
};
