import styled, { css } from 'styled-components';
import { breakpoints, iconSizes } from '@nerve/core/tokens';
import { IconProps } from './__types';

/**
 * Get the requested icon size,  Also handles responsive sizes if a
 * responsive size configuration is present.
 *
 * @param size
 * @param responsive
 */
const getIconSize = (
    size: IconProps['size'],
    responsive: IconProps['responsive']
) => {
    if (responsive) {
        return css`
            height: ${iconSizes[responsive.size]};
            width: ${iconSizes[responsive.size]};
            ${breakpoints[responsive.breakpoint]} {
                height: ${iconSizes[size]};
                width: ${iconSizes[size]};
            }
        `;
    }
    return css`
        height: ${iconSizes[size]};
        width: ${iconSizes[size]};
    `;
};

export const Icon = styled.i<IconProps>`
    align-items: center;
    display: flex;
    justify-content: center;
    color: ${({ theme, color }) =>
        color ? theme.icons[color].color.default : 'inherit'};

    ${({ size, responsive }) => getIconSize(size, responsive)};

    > svg {
        ${({ size, responsive }) => getIconSize(size, responsive)};
    }
`;
