import React from 'react';

import { CardProps } from './Card.types';
import * as styled from './Card.styles';

export const Card: React.FC<CardProps> = ({
    layout = 'stacked',
    elevation,
    gutter,
    children,
    ...rest
}): JSX.Element => {
    return (
        <styled.Card
            layout={layout}
            elevation={elevation}
            gutter={gutter}
            {...rest}
        >
            {children}
        </styled.Card>
    );
};
