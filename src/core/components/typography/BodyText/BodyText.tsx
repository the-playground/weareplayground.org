import React from 'react';
import { BodyTextProps } from './__types';
import * as Styled from './__styles';

export const BodyText: React.FC<BodyTextProps> = ({
    children,
    as,
    size,
    color,
    weight = 'regular',
    className,
    ...others
}) => (
    <Styled.BodyText
        as={as}
        color={color}
        size={size}
        weight={weight}
        className={className}
        {...others}
    >
        {children}
    </Styled.BodyText>
);

export type { BodyTextProps } from './__types';
