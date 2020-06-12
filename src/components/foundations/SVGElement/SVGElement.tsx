import React from 'react';

/**
 *
 * @param param0
 */

const LinearGradient: React.FC<LinearGradientProps> = ({ gradient, name }) => (
    <defs>
        <linearGradient id={`${name}Gradient`} gradientTransform="rotate(15)">
            <stop offset="0%" stopColor={gradient.start} />
            <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
    </defs>
);

export const SVGElement: React.FC<SVGElementProps> = ({
    name,
    path,
    viewBox,
    gradient,
    ...others
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...others}>
        {gradient ? <LinearGradient gradient={gradient!} name={name} /> : ''}
        {path}
    </svg>
);

interface Gradient {
    start: string;
    end: string;
}

interface LinearGradientProps {
    name: string;
    gradient: Gradient;
}

interface SVGElementProps {
    name: string;
    path: React.ReactElement;
    viewBox: string;
    gradient: Gradient;
}
