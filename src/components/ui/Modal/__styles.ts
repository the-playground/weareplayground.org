import styled from 'styled-components';

import { grid, zIndex } from '@tokens';

export const Modal = styled.div<{ isOpen: boolean }>`
    align-items: center;
    background-color: ''; /* Get from theme */
    display: flex;
    left: 0;
    height: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${zIndex.modal};
`;
export const ModalContainer = styled.div`
    background-color: transparent;
    flex: 1;
    position: relative;
    max-width: ${grid.l};
    margin: 0 auto;
`;

export const ModalContent = styled.div``;
