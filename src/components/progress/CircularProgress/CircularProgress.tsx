import React from 'react';

import { CircularProgressProps } from './CircularProgress.d';
import * as styled from './CircularProgress.styles';

export const CircularProgress: React.FC<CircularProgressProps> = ({
    size,
    color,
}) => {
    return (
        <styled.CircularProgress
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            size={size}
            color={color}
        >
            <circle cx="50" cy="50" r="45" />
        </styled.CircularProgress>
    );
};
