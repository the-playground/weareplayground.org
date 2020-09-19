import styled from 'styled-components';
import { Heading } from '@components/foundations';
import { TitleBlockProps } from './__types';

export const TitleBlockText = styled(Heading)`
    display: inline;
`;

export const TitleBlock = styled.div<
    Pick<TitleBlockProps, 'offset' | 'bgColor'>
>`
    transform: rotate(${(props) => props.offset}deg);
    ${TitleBlockText} {
        background-color: ${(props) =>
            props.theme.backgrounds[props.bgColor].color};
    }
`;
