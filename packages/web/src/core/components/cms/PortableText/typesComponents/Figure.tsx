import React from 'react';

import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import { clientConfig } from '@nerve/shared/configs';

import { Image } from '../../../media';
import { BodyText } from '../../../typography';

/**
 * Handles rendering images added to a Sanity Block
 *
 * TODO: Improve Types based on what we expect from Sanity
 */
export const Figure: React.FC<FigureProps> = ({ node }) => {
    if (!node || !node.asset || !node.asset._id) {
        return null;
    }

    const fluidProps = getFluidGatsbyImage(
        node.asset._id,
        { maxWidth: 768 },
        clientConfig.sanity
    );

    if (!fluidProps) {
        return null;
    }

    return (
        <figure key={node._key}>
            <Image fluid={fluidProps} alt={node.alt} />
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
