import React from 'react';
import styled, { css } from 'styled-components';
import { Link, LinkProps } from '@nerve/core/routing';
import { animation } from '@nerve/core/tokens';

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

export interface CardActionAreaProps extends LinkProps {
    hoverOpacity?: number;
    disableHoverOpacity?: true;
}
