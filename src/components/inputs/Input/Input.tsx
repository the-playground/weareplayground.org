import React from 'react';

import { InputProps } from './__types';
import * as styled from './__styles';

export const Input: React.FC<InputProps> = ({
    color,
    name,
    label,
    ref,
    ...others
}) => {
    return (
        <styled.Input color={color}>
            <label htmlFor={name}>{label}</label>
            <input ref={ref} {...others} />
        </styled.Input>
    );
};
