import React from 'react';
import { format } from 'date-fns';
import { Icon } from '@nerve/core/components';

import * as styled from './DateRange.styles';

export const DateRange: React.FC<DateRangeProps> = ({
    startDate,
    endDate,
    withIcon = true,
}) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const year = new Date(endDate);

    return (
        <styled.DateRange>
            {withIcon && <Icon name="Calendar" size="s" color="light" />}
            {format(start, 'MMM dd')} - {format(end, 'MMM dd')},{' '}
            {format(year, 'yyyy')}
        </styled.DateRange>
    );
};

interface DateRangeProps {
    startDate: string;
    endDate: string;
    withIcon?: boolean;
}
