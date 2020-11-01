import React from 'react';
import { ContainerProps } from './Container.d';
import * as styled from './Container.styles';

export const Container: React.FC<ContainerProps> = ({
    children,
    maxWidth = 'l',
    type = 'contained',
    className,
    ...others
}) => (
    <styled.Container
        maxWidth={maxWidth}
        type={type}
        className={className}
        {...others}
    >
        {children}
    </styled.Container>
);

export type { ContainerProps } from './Container.d';
