import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@nerve/core/tokens';

// TYPES
export interface CardHeaderProps {
    title: JSX.Element;
    subtitle?: JSX.Element;
    avatar?: JSX.Element;
    action?: JSX.Element;
    verticalSpacing?: AvailableComponentSpacing;
    disableSpacing?: true;
}

// STYLES
export const StyledCardHeader = styled.div<
    Pick<CardHeaderProps, 'disableSpacing' | 'verticalSpacing'>
>`
    --card-header-y-gutter: var(--card-spacing);
    --card-header-x-gutter: var(--card-spacing);

    align-items: center;
    display: flex;

    ${({ verticalSpacing }) =>
        verticalSpacing &&
        css`
            --card-header-y-gutter: ${spacing.component[verticalSpacing!]};
        `};

    ${({ disableSpacing }) =>
        !disableSpacing &&
        css`
            padding: var(--card-header-y-gutter) var(--card-header-x-gutter);
        `};
`;

// COMPONENT DEFINITION
export const CardHeader = ({
    verticalSpacing,
    disableSpacing,
    title,
    subtitle,
    avatar,
    action,
}: CardHeaderProps) => (
    <StyledCardHeader
        verticalSpacing={verticalSpacing}
        disableSpacing={disableSpacing}
    >
        {avatar && <div className="avatar">{avatar}</div>}
        <div className="copy">
            <div className="title">{title}</div>
            {subtitle && <div className="subtitle">subtitle</div>}
        </div>
        {action && <div className="action">{action}</div>}
    </StyledCardHeader>
);