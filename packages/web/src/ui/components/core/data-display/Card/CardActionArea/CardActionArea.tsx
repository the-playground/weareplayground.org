import React from 'react';
import styled, { css } from 'styled-components';
import { Link, LinkProps } from '@web/core/routing';
import { animation } from '@web/core/tokens';

// TYPES
export interface CardActionAreaProps extends LinkProps {
    hoverOpacity?: number;
    disableHoverOpacity?: true;
}

// STYLES
const StyledCardActionArea = styled(Link)<CardActionAreaProps>`
    transition: ${animation.cardHover};

    ${({ disableHoverOpacity, hoverOpacity }) =>
        !disableHoverOpacity &&
        css`
            :hover {
                opacity: ${hoverOpacity!};
            }
        `}
`;

// COMPONENT DEFINITION
export const CardActionArea: React.FC<CardActionAreaProps> = ({
    children,
    hoverOpacity = 0.8,
    disableHoverOpacity,
    ...rest
}) => {
    return (
        <StyledCardActionArea
            disableHoverOpacity={disableHoverOpacity}
            hoverOpacity={hoverOpacity}
            {...rest}
        >
            {children}
        </StyledCardActionArea>
    );
};
