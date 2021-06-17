import React from 'react';
import styled from 'styled-components';
import { AvailableOverlayTheme } from '@web/ui/themes';
import { zIndex } from '@web/core/tokens';

const StyledOverlay = styled.div<BackgroundOverlayProps>`
    background: ${({ theme, variant }) => theme.overlays[variant].color};
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: ${zIndex.base};
`;

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
    variant,
    className,
}) => {
    return <StyledOverlay variant={variant} className={className} />;
};

export interface BackgroundOverlayProps {
    className?: string;
    variant: AvailableOverlayTheme;
}
