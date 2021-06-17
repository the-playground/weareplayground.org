import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@nerve/core/tokens';
import { Image } from '@nerve/core/components';

// TYPES
export interface CardMediaProps {}

// STYLES
export const StyledCardMedia = styled.div<CardMediaProps>``;

// COMPONENT DEFINITION
export const CardMedia: React.FC<CardMediaProps> = ({ children }) => (
    <StyledCardMedia>{children}</StyledCardMedia>
);
