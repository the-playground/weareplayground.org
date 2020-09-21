import React from 'react';

import { Heading } from '@components/foundations';

import * as styled from './__styles';
import { TitleHighlightProps } from './__types';

export const TitleHighlight: React.FC<TitleHighlightProps> = ({
    children,
    className,
    color,
    bgColor,
    offset = 2,
    tag,
    size,
}) => {
    return (
        <styled.TitleHighlight
            offset={offset}
            bgColor={bgColor}
            size={size}
            className={className}
        >
            <Heading
                tag={tag}
                color={color}
                size={size}
                textTransform="uppercase"
                className="text"
            >
                {children}
            </Heading>
        </styled.TitleHighlight>
    );
};
