import React, { isValidElement } from 'react';

import { IconProps, RawIconDefinition } from './__types';

import { SVGElement } from '../SVGElement/SVGElement';

import * as Styled from './__styles';
import { availableIcons } from './__manifest__';

export const Icon: React.FC<IconProps> = ({
    name,
    size = 'l',
    color = 'light',
    gradient,
    ...others
}) => {
    const selectedIcon: RawIconDefinition = availableIcons[name];

    if (!isValidElement(selectedIcon?.path)) {
        console.error(
            `The requested path for the icon "${name}" was not valid. The retrieved path was ${selectedIcon.path}. The icon could not be rendered.` //eslint-disable-line
        );
        return <></>;
    }

    return (
        <Styled.Icon
            size={size}
            color={color}
            name={name}
            gradient={gradient}
            {...others}
        >
            <SVGElement
                name={name}
                path={selectedIcon.path}
                viewBox={selectedIcon.viewBox}
                gradient={gradient!}
            />
        </Styled.Icon>
    );
};
