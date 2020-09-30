import React from 'react';

import { LogoProps } from './__types';
import * as styled from './__styles';
import { availableLogos } from './__manifest__';

export const Logo: React.FC<LogoProps> = ({
    size,
    type,
    color,
    responsive,
    ...others
}) => {
    const selectedLogo = availableLogos[type];

    if (!selectedLogo) {
        console.error(
            `A logo could not be retrieved for type "${type}". The Logo will not be rendered.`
        );
        return null;
    }

    return (
        <styled.Logo
            size={size}
            responsive={responsive}
            type={type}
            color={color}
            {...others}
        >
            {selectedLogo()}
        </styled.Logo>
    );
};
