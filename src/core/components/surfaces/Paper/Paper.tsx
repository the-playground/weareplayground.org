import React from 'react';

import { PaperProps } from './Paper.d';
import * as styled from './Paper.styles';

export const Paper: React.FC<PaperProps> = ({
    children,
    variant,
    bgColor,
    borderColor,
    className,
}) => (
    <styled.Paper
        variant={variant ?? 'default'}
        bgColor={bgColor}
        borderColor={borderColor}
        className={className}
    >
        {children}
    </styled.Paper>
);
