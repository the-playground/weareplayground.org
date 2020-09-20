import React from 'react';

import { Heading } from '@components/foundations';

import * as styled from './__styles';
import { TitleBlockProps } from './__types';

export const TitleBlock: React.FC<TitleBlockProps> = ({
    children,
    className,
    color,
    bgColor,
    offset = 2,
    tag,
    size,
}) => {
    return (
        <styled.TitleBlock
            offset={offset}
            bgColor={bgColor}
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
        </styled.TitleBlock>
    );
};
