import styled from 'styled-components';
import { TitleBlockProps } from './__types';

export const TitleBlock = styled.div<
    Pick<TitleBlockProps, 'offset' | 'bgColor'>
>`
    transform: rotate(${(props) => props.offset}deg);
    > .text {
        background-color: ${(props) =>
            props.theme.backgrounds[props.bgColor].color};
    }
`;
