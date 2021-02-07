import styled from 'styled-components';
import { rgba } from 'polished';
import { borders, grid, spacing, zIndex } from '@nerve/core/tokens';
import { OverlayBase } from '../OverlayBase/OverlayBase';
import { IModal } from './Modal.d';

export const Modal = styled(OverlayBase)<IModal>`
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

    .container {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: ${spacing.component.s};
    }

    .content {
        background-color: ${({ theme }) => theme.surfaces.neutralLight};
        border-radius: ${borders.modalRadius};
        display: flex;
        flex-direction: column;
        padding: ${spacing.component.xl};
        margin: 0 auto;
        max-height: 100%;
        max-width: ${({ containerSize }) => grid[containerSize!]};
        position: relative;
        width: 100%;
    }
`;
