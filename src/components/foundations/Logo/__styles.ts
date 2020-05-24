import styled from 'styled-components';
import { LogoProps, AvailableLogoSizes } from './__types';

const logoWidth: AvailableLogoSizes = {
    l: '150px',
    m: '100px',
    s: '75px',
    xs: '50px',
};

export const Logo = styled.i<LogoProps>`
    color: ${(props) =>
        props.color ? props.theme.logo[props.color].color.default : 'inherit'};
    display: inline-flex;
    height: auto;

    svg {
        height: auto;
        width: ${(props) => logoWidth[props.size]};
    }
`;
