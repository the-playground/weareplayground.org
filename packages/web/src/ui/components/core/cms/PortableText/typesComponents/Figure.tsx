import React from 'react';

import { BrandImage } from '../../../media';
import { BodyText } from '../../../data-display';

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
            <BrandImage
                image={node.asset}
                sanityConfig={{
                    fit: 'fillmax',
                    width: 768,
                    placeholder: 'blurred',
                }}
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
