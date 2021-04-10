import React from 'react';

import { getGatsbyImageData } from 'gatsby-source-sanity';

import { clientConfig } from '@nerve/shared/configs';

import { Image } from '../../../media';
import { BodyText } from '../../../typography';

/**
 * Handles rendering images added to a Sanity Block
 *
 * TODO: Improve Types based on what we expect from Sanity
 */
export const Figure: React.FC<FigureProps> = ({ node }) => {
    if (!node || !node.asset) {
        return null;
    }

    const imageData = getGatsbyImageData(
        node,
        { fit: 'fillmax' },
        clientConfig.sanity
    );

    if (!imageData) {
        return null;
    }

    return (
        <figure key={node._key}>
            <Image image={imageData} alt={node.alt} />
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
