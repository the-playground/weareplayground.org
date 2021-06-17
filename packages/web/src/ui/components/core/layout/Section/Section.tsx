import React from 'react';

import { BackgroundOverlay, BackgroundImage } from '@web/core/components';

import { SectionProps } from './Section.d';
import * as styled from './Section.styles';

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    bgColor,
    bgImage,
    overlay,
}) => {
    return (
        <styled.Section className={className} bgColor={bgColor}>
            {bgImage && <BackgroundImage {...bgImage} />}
            {overlay && <BackgroundOverlay variant={overlay} />}
            <div className="content">{children}</div>
        </styled.Section>
    );
};

export * from './Section.d';
