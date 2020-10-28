import React from 'react';

import { Heading } from '../Heading/Heading';

import * as styled from './__styles';
import { GrittyHeadingProps } from './__types';

export const GrittyHeading: React.FC<GrittyHeadingProps> = ({
    children,
    className,
    color,
    bgColor,
    offset = 2,
    as,
    size,
}) => {
    return (
        <styled.GrittyHeading
            offset={offset}
            bgColor={bgColor}
            size={size}
            className={className}
        >
            <Heading
                as={as}
                color={color}
                size={size}
                textTransform="uppercase"
                className="text"
            >
                {children}
            </Heading>
        </styled.GrittyHeading>
    );
};
