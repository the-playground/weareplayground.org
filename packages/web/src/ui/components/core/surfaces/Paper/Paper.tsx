import React from 'react';

import { PaperProps } from './Paper.types';
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
