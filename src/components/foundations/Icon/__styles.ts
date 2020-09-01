import styled from 'styled-components';
import { iconSizes } from '@tokens';
import { IconProps } from './__types';

export const Icon = styled.i<IconProps>`
    align-items: center;
    display: flex;
    height: ${(props) => iconSizes[props.size]};
    justify-content: center;
    width: ${(props) => iconSizes[props.size]};
    color: ${(props) =>
        props.color ? props.theme.icons[props.color].color.default : 'inherit'};

    > svg {
        height: ${(props) => iconSizes[props.size]};
        width: ${(props) => iconSizes[props.size]};
    }
`;
