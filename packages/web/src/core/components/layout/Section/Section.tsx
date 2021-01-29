import React from 'react';

import { BackgroundOverlay } from '@nerve/core/components';

import { SectionProps } from './Section.d';
import * as styled from './Section.styles';

export const Section: React.FC<SectionProps> = ({
    children,
    bgColor,
    className,
}) => {
    return (
        <styled.Section className={className} bgColor={bgColor}>
            {children}
        </styled.Section>
    );
};

export * from './Section.d';
