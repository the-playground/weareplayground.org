import React from 'react';

import { IconProps } from './__types';

import { SVGElement } from '../SVGElement/SVGElement';

import * as Styled from './__styles';
import { availableIcons, IconDefinition } from './__manifest__';

export const Icon: React.FC<IconProps> = ({
    name,
    color,
    size,
    responsive,
    title,
    desc,
    ...others
}) => {
    const selectedIcon: IconDefinition = availableIcons[name];

    if (!selectedIcon) {
        console.warn(
            `The requested icon "${name}" does not exist. No icon will be rendered.`
        );
        return null;
    }

    return (
        <Styled.Icon
            name={name}
            color={color}
            size={size}
            responsive={responsive}
            {...others}
        >
            <SVGElement
                name={name}
                path={selectedIcon.path}
                viewBox={selectedIcon.viewBox}
                title={title}
                desc={desc}
            />
        </Styled.Icon>
    );
};

export * from './__types';
