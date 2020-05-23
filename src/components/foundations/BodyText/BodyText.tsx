import React from 'react';
import { BodyTextProps } from './__types';
import * as Styled from './__styles';

export const BodyText: React.FC<Omit<BodyTextProps, 'as'>> = ({
    children,
    tag,
    size,
    color,
    ...others
}) => (
    <Styled.BodyText as={tag} color={color} size={size} {...others}>
        {children}
    </Styled.BodyText>
);

export type { BodyTextProps } from './__types';
