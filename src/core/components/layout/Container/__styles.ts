import styled from 'styled-components';
import { grid } from '@nerve/core/tokens';
import { ContainerProps } from './__types';

export const Container = styled.div<ContainerProps>`
    margin: 0 auto;
    max-width: ${(props) => props.maxWidth && grid[props.maxWidth]};
    position: relative;
    width: ${(props) => (props.type === 'full' ? '100%' : '93%')};
`;
