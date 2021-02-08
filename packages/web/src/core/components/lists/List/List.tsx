import React from 'react';

import { IList } from './List.d';
import * as styled from './List.styles';

export const List: React.FC<IList> = ({
    className,
    heading,
    gutter = 'm',
    itemSpacing = 'm',
    headingSpacing = 's',
    disablePadding,
    children,
}) => {
    return (
        <styled.List
            className={className}
            gutter={gutter}
            itemSpacing={itemSpacing}
            headingSpacing={headingSpacing}
            disablePadding={disablePadding}
        >
            {heading && <div className="heading">{heading}</div>}
            {children}
        </styled.List>
    );
};
