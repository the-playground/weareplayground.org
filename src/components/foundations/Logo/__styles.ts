import styled, { css } from 'styled-components';
import { LogoProps, AvailableLogoSizes } from './__types';

const logoWidth: AvailableLogoSizes = {
    l: '150px',
    m: '100px',
    s: '75px',
    xs: '50px',
};

export const Logo = styled.i<LogoProps>`
    display: inline-flex;
    height: auto;
    line-height: 0;

    svg {
        height: auto;
        width: ${(props) => logoWidth[props.size]};
    }
`;
