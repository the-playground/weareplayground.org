import styled from 'styled-components';
import { grid } from '@web/core/tokens';
import { ContainerProps } from './Container.d';

export const Container = styled.div<ContainerProps>`
    margin: 0 auto;
    max-width: ${(props) => props.maxWidth && grid[props.maxWidth]};
    position: relative;
    width: ${(props) => (props.type === 'full' ? '100%' : '93%')};
`;
