import React, { useRef, useState } from 'react';

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
    const [isLoading, setIsLoading] = useState(true);

    return (
        <styled.Section
            className={className}
            bgPosition={bgPosition}
            fluid={bgImage}
            Tag="section"
            onLoad={() => setIsLoading(false)}
            data-image-loading={isLoading}
        >
            {overlay && <BackgroundOverlay variant={overlay} />}
            <div className="content">{children}</div>
        </styled.Section>
    );
};

export * from './SectionWithBG.d';
