import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';

import { Link } from '@nerve/core/routing';
import { BodyText } from '../../typography/BodyText/BodyText';
import { Heading } from '../../typography/Heading/Heading';
import { GrittyHeading } from '../../typography/GrittyHeading/GrittyHeading';

import { Figure } from './components/Figure';

const DefaultBlockRenderer: React.FC = (props: any) => {
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

export const serializers = {
    types: {
        block: DefaultBlockRenderer,
        imageWithFullMeta: Figure,
        imageWithAlt: Figure,
    },
    marks: {},
};
