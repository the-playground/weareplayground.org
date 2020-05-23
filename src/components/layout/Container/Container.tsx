import React from 'react';
import { ContainerProps } from './__types';
import * as styled from './__styles';

export const Container: React.FC<ContainerProps> = ({
    children,
    maxWidth = 'l',
    type = 'contained',
    ...others
}) => (
    <styled.Container maxWidth={maxWidth} type={type} {...others}>
        {children}
    </styled.Container>
);

export type { ContainerProps } from './__types';
