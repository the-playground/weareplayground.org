import React from 'react';

const ExternalLinkRender: React.FC = ({ children }) => (
    <span>{children} 🌍</span>
);

const InternalLinkRender: React.FC = ({ children }) => (
    <span>{children} 🔗</span>
);

export const internalPostLink = {
    name: 'internalPostLink',
    title: 'Internal Post Link',
    type: 'object',
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: [{ type: 'post' }],
        },
    ],
    blockEditor: {
        icon: () => '🔗',
        render: InternalLinkRender,
    },
};

export const internalSeasonLink = {
    name: 'internalSeasonLink',
    title: 'Internal Season Link',
    type: 'object',
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: [{ type: 'season' }],
        },
    ],
    blockEditor: {
        icon: () => '🔗',
        render: InternalLinkRender,
    },
};

export const internalShowLink = {
    name: 'internalShowLink',
    title: 'Internal Show Link',
    type: 'object',
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: [{ type: 'show' }],
        },
    ],
    blockEditor: {
        icon: () => '🔗',
        render: InternalLinkRender,
    },
};

export const internalLink = {
    name: 'internalLink',
    title: 'Internal Link',
    type: 'object',
    fields: [
        {
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: [{ type: 'post' }, { type: 'season' }, { type: 'show' }],
        },
    ],
    blockEditor: {
        icon: () => '🔗',
        render: InternalLinkRender,
    },
};

export const externalLink = {
    name: 'externalLink',
    title: 'External Link',
    type: 'object',
    fields: [
        {
            title: 'URL',
            name: 'href',
            type: 'url',
            validation: (Rule: any) =>
                Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                }),
        },
    ],
    blockEditor: {
        icon: () => '🌍',
        render: ExternalLinkRender,
    },
};
