import { useState } from 'react';
import parseISO from 'date-fns/parseISO';
import sub from 'date-fns/sub';
import isPast from 'date-fns/isPast';
import isWithinInterval from 'date-fns/isWithinInterval';

import { Performance } from '@type/show';

export const useShowStatus = (performances: Performance[]) => {
    const [status, setStatus] = useState('inactive');

    if (!performances || performances.length === 0) {
        return { status, setStatus };
    }

    const firstPerformance = parseISO(performances[0].datetime);

    const lastPerformance = parseISO(
        performances[performances.length - 1].datetime
    );

    const upcomingWindowStart = sub(firstPerformance, { days: 30 });

    const productionInterval = {
        start: firstPerformance,
        end: lastPerformance,
    };

    const comingSoonInterval = {
        start: upcomingWindowStart,
        end: lastPerformance,
    };

    const now = new Date();

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
