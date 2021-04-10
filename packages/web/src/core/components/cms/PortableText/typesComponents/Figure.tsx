import React from 'react';

import { SanityImage } from '../../../media';
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

    return (
        <figure key={node._key}>
            <SanityImage
                image={node.asset}
                config={{ fit: 'fillmax', width: 768 }}
                alt={node.alt ?? ''}
            />
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
