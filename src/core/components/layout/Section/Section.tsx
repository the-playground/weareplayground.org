import React from 'react';

import { BackgroundOverlay } from '@nerve/core/components';

import { SectionProps } from './Section.d';
import * as styled from './Section.styles';

export const Section: React.FC<SectionProps> = ({
    children,
    bgColor,
    bgImage,
    bgPosition,
    overlay,
    className,
}) => {
    return (
        <>
            {bgImage ? (
                <styled.SectionWithBackgroundImage
                    className={className}
                    bgColor={bgColor}
                    bgPosition={bgPosition}
                    fluid={bgImage.fluid}
                    Tag="section"
                    fadeIn="1"
                >
                    {overlay && <BackgroundOverlay variant={overlay} />}
                    <div className="content">{children}</div>
                </styled.SectionWithBackgroundImage>
            ) : (
                <styled.Section className={className} bgColor={bgColor}>
                    {children}
                </styled.Section>
            )}
        </>
    );
};

export * from './Section';
export * from './Section.d';
