import React from 'react';
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
            <styled.TitleBlockText
                tag={tag}
                color={color}
                size={size}
                textTransform="uppercase"
            >
                {children}
            </styled.TitleBlockText>
        </styled.TitleBlock>
    );
};
