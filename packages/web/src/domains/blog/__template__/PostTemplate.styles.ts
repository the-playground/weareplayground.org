import styled from 'styled-components';

import {
    animation,
    appNavBreakpoint,
    borders,
    spacing,
    typography,
} from '@web/ui/tokens';

export const Content = styled.div`
    padding-bottom: ${spacing.layout.m};

    .p {
        margin-top: ${spacing.component.xl};
    }

    .p strong {
        color: ${({ theme }) => theme.typography.accent};
    }

    .content-link {
        display: inline-block;
        position: relative;
        --scaleX: 0.95;
        --rotate: 0deg;
        --skew: -20deg;

        &:before {
            height: 3px;
            position: absolute;
            background: ${({ theme }) => theme.typography.accentDark};
            content: '';
            width: 100%;
            bottom: 0px;
            z-index: -1;
            transition: ${animation.linkHover};
            transform: skew(var(--skew)) rotate(var(--rotate))
                scaleX(var(--scaleX));
            opacity: 0.9;
        }

        &:hover :before {
            --scaleX: 1.03;
            background: ${({ theme }) => theme.typography.accent};
            opacity: 1;
        }
    }

    .content-link:hover {
        --linkScaleX: 1.03;
    }

    figure {
        margin-top: ${spacing.layout.m};
        margin-bottom: ${spacing.layout.m};
    }

    figure img {
        border-radius: ${borders.imageRadius};
    }

    figure figcaption {
        margin-top: ${spacing.component.s};
    }

    /* Grunge heading */
    .h2 {
        margin-bottom: ${spacing.component.l};
        margin-top: ${spacing.component.xxl};
    }

    .h2,
    .h3,
    .h4 {
        margin-bottom: ${spacing.component.s};
        margin-top: ${spacing.component.xxl};
    }

    /* Any heading tags that are followed immediately by a standard paragraph */
    > :is(div, .h2, .h3, .h4, .h5, .h6) + .p {
        margin-top: 0;
    }

    ol {
        list-style-type: decimal-leading-zero;
    }

    ul,
    ol {
        color: ${({ theme }) => theme.typography.light};
        margin-top: ${spacing.layout.s};
        margin-left: ${spacing.component.xl};
        ${typography.bodyText.m};
    }

    ul > li:not(:last-child),
    ol > li:not(:last-child) {
        margin-bottom: ${spacing.component.l};
    }

    ol > li > ol {
        list-style-type: lower-alpha;
    }

    ol > li > ol,
    ol > li > ul {
        margin-top: ${spacing.component.s};
    }
`;

export const BlogHero = styled.div`
    padding-top: ${spacing.layout.m};
    padding-bottom: ${spacing.layout.s};

    ${appNavBreakpoint} {
        padding-bottom: ${spacing.layout.m};
        padding-top: ${spacing.layout.xl};
    }

    .title {
        margin-bottom: ${spacing.component.m};
    }

    .featured-image {
        margin-top: ${spacing.layout.m};

        ${appNavBreakpoint} {
            margin-top: ${spacing.layout.l};
        }
    }

    .featured-image img {
        border-radius: ${borders.imageRadius};
    }
`;
