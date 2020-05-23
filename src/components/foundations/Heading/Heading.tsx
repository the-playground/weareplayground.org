import React from 'react';

import { HeadingProps } from './__types';
import * as Styled from './__styles';

export const Heading: React.FC<Omit<HeadingProps, 'as'>> = ({
    children,
    tag,
    size,
    color,
    ...others
}) => (
    <Styled.Heading as={tag} color={color} size={size} {...others}>
        {children}
    </Styled.Heading>
);

export type { HeadingProps } from './__types';
