import styled from 'styled-components';
import { IconProps } from './__types';

export const Icon = styled.i<IconProps>`
    align-items: center;
    color: ${(props) =>
        props.color ? props.theme.icons[props.color].color.default : 'inherit'};
    display: flex;
    height: ${(props) => props.selectedSize};
    justify-content: center;
    width: ${(props) => props.selectedSize};

    > svg {
        height: ${(props) => props.selectedSize};
        width: ${(props) => props.selectedSize};
    }

    > svg path {
        fill: currentColor;
    }
`;
