import React from 'react';

import { IconProps } from './__types';

import { SVGElement } from '../SVGElement/SVGElement';

import * as Styled from './__styles';
import { availableIcons, AvailableIcon, IconDefinition } from './__manifest__';

export const Icon: React.FC<Omit<IconProps, 'selectedSize'>> = ({
    name,
    color,
    size,
    ...others
}) => {
    const selectedIcon: AvailableIcon = availableIcons[name];

    if (!selectedIcon) {
        console.warn(
            `The requested icon "${name}" does not exist. No icon will be rendered.`
        );
        return null;
    }

    const sizedIcon: IconDefinition = selectedIcon[size]!;

    if (!sizedIcon) {
        console.warn(
            `The requested icon "${name}" exists but does contain a size of "${size}". Valid sizes for this icon are [${Object.keys(
                selectedIcon
            )}]. No icon will be rendered.`
        );
        return null;
    }

    return (
        <Styled.Icon
            selectedSize={sizedIcon.size}
            name={name}
            color={color}
            {...others}
        >
            <SVGElement
                name={name}
                path={sizedIcon.path}
                viewBox={sizedIcon.viewBox}
            />
        </Styled.Icon>
    );
};
