import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';

import { BodyText } from '../../../data-display/BodyText/BodyText';
import { Heading } from '../../../data-display/Heading/Heading';
import { GrittyHeading } from '../../../data-display/GrittyHeading/GrittyHeading';

/**
 * Handles rendering anything within 'types.block'
 *
 * TODO: Improve Types based on what we expect from Sanity
 */
export const DefaultBlock: React.FC = (props: any) => {
    const { node, children } = props;
    const { style, _key } = node; // eslint-disable-line @typescript-eslint/naming-convention

    if (style === 'normal') {
        return (
            <BodyText size="m" key={_key} color="light" className="p">
                {children}
            </BodyText>
        );
    }
    if (style === 'h2') {
        return (
            <GrittyHeading
                size="xs"
                as="h2"
                key={_key}
                color="dark"
                bgColor="neutralLight"
                offset={-1}
                className="h2"
            >
                {children}
            </GrittyHeading>
        );
    }
    if (style === 'h3') {
        return (
            <Heading size="s" as="h3" key={_key} color="medium" className="h3">
                {children}
            </Heading>
        );
    }

    // Fall back to default handling
    return BasePortableText.defaultSerializers.types.block(props);
};
