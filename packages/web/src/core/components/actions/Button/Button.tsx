import React from 'react';

import {
    FillButtonProps,
    GhostButtonProps,
    OutlineButtonProps,
    TextButtonProps,
} from './Button.d';
import * as styled from './Button.styles';

export const FillButton: React.FC<FillButtonProps> = (props) => {
    const { color, children, ...rest } = props;

    return (
        <styled.FillButton color={color} {...rest}>
            {children}
        </styled.FillButton>
    );
};

export const GhostButton: React.FC<GhostButtonProps> = (props) => {
    const { color, children, ...rest } = props;

    return (
        <styled.GhostButton color={color} {...rest}>
            {children}
        </styled.GhostButton>
    );
};

export const OutlineButton: React.FC<OutlineButtonProps> = (props) => {
    const { color, children, ...rest } = props;

    return (
        <styled.OutlineButton color={color} {...rest}>
            {children}
        </styled.OutlineButton>
    );
};

export const TextButton: React.FC<TextButtonProps> = (props) => {
    const { color, children, ...rest } = props;

    return (
        <styled.TextButton color={color} {...rest}>
            {children}
        </styled.TextButton>
    );
};
