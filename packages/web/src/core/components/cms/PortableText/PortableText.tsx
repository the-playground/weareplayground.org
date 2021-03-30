import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import { sanityConfig } from '@nerve/shared/configs';

import { serializers } from './serializers';

export const PortableText: React.FC<PortableTextProps> = ({
    content,
    className,
}) => {
    return (
        <BasePortableText
            blocks={content}
            serializers={serializers}
            className={className}
            {...sanityConfig}
        />
    );
};

interface PortableTextProps {
    content: unknown[];
    className?: string;
}
