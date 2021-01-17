import React from 'react';

import {
    getFluidGatsbyImage,
    GatsbyFluidImageProps,
} from 'gatsby-source-sanity';

import { SanityFluidImage } from '@nerve/shared/types';
import { clientConfig } from '@app/configs';

import { Image } from '../../../media';
import { BodyText } from '../../../typography';

export const Figure: React.FC<FigureProps> = ({ node }) => {
    if (!node || !node.asset || !node.asset._id) {
        return null;
    }

    const fluidProps = getFluidGatsbyImage(
        node.asset._id,
        { maxWidth: 768 },
        clientConfig.sanity
    );

    return (
        <figure key={node._key}>
            <Image fluid={fluidProps!} alt={node.alt} />
            {node.caption && node.credit && (
                <BodyText as="figcaption" color="medium" size="s">
                    {node.caption}; photo credit: {node.credit}
                </BodyText>
            )}
        </figure>
    );
};

interface FigureProps {
    node: any;
}
