import React from 'react';

import { HeadingProps } from './__types';
import * as Styled from './__styles';

export const Heading: React.FC<Omit<HeadingProps, 'as'>> = ({
    children,
    tag,
    size,
    color,
    className,
    ...others
}) => (
    <Styled.Heading
        as={tag}
        color={color}
        size={size}
        className={className}
        {...others}
    >
        {children}
    </Styled.Heading>
);

export type { HeadingProps } from './__types';
