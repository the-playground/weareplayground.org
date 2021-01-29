import React from 'react';

import { BackgroundOverlay } from '@nerve/core/components';

import { SectionWithBGProps } from './SectionWithBG.d';
import * as styled from './SectionWithBG.styles';

export const SectionWithBG: React.FC<SectionWithBGProps> = ({
    children,
    bgImage,
    bgPosition,
    overlay,
    className,
}) => {
    return (
        <styled.Section
            className={className}
            bgPosition={bgPosition}
            fluid={bgImage}
            Tag="section"
            fadeIn="soft"
        >
            {overlay && <BackgroundOverlay variant={overlay} />}
            <div className="content">{children}</div>
        </styled.Section>
    );
};

export * from './SectionWithBG.d';
