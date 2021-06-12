import React from 'react';

import { HeadingProps } from './__types';
import * as Styled from './__styles';

export const Heading: React.FC<HeadingProps> = ({
    children,
    textTransform,
    as,
    size,
    color,
    className,
    ...others
}) => (
    <Styled.Heading
        as={as}
        textTransform={textTransform}
        color={color}
        size={size}
        className={className}
        {...others}
    >
        {children}
    </Styled.Heading>
);

export type { HeadingProps } from './__types';
