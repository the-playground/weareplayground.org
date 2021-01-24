import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

export const Block: React.FC = ({ content }) => {
    return <BlockContent blocks={content} />;
};
