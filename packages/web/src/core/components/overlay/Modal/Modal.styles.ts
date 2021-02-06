import styled from 'styled-components';
import { rgba } from 'polished';
import { spacing, zIndex } from '@nerve/core/tokens';
import { OverlayBase } from '../OverlayBase/OverlayBase';

export const Modal = styled(OverlayBase)`
    .backdrop,
    .container {
        inset: 0 !important;
        position: fixed !important;
        z-index: ${zIndex.portal} !important;
    }

    .backdrop {
        background: ${({ theme }) => rgba(theme.surfaces.default, 0.8)};
        overflow-y: auto !important;
    }
`;
