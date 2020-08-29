import styled from 'styled-components';

import { zIndex } from '@tokens';

export const ShowHero = styled.div`
    min-height: 100vh;
    position: relative;

    .background {
        z-index: ${zIndex.behind};
    }

    .background .overlay,
    .background > .image {
        height: 100%;
        left: 0;
        position: absolute !important;
        top: 0;
        width: 100%;
    }
`;
