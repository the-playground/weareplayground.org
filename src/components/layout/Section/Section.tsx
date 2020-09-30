import React from 'react';

import { BackgroundOverlay } from '@components/foundations';

import { SectionProps } from './__types';
import * as styled from './__styles';

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

export * from './__types';
