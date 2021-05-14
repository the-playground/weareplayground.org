import React from 'react';

import { BackgroundOverlay, Image } from '@nerve/core/components';

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
                >
                    <div className="bg-image">
                        <Image
                            image={bgImage.asset}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>

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

export * from './Section.d';
