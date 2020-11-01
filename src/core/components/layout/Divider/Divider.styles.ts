import styled from 'styled-components';

import { DividerProps } from './Divider.d';

export const Divider = styled.div<DividerProps>`
    background-color: ${({ theme, color }) => theme.surfaces[color]};
    height: 1px;
`;
