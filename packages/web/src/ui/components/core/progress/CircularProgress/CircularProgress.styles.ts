import styled from 'styled-components';
import { iconSizes } from '@web/ui/tokens';
import { CircularProgressProps } from './CircularProgress.d';

export const CircularProgress = styled.svg<CircularProgressProps>`
    animation: 2s linear infinite svg-animation;
    max-width: ${({ size }) => iconSizes[size]};
    line-height: 0;

    circle {
        animation: 1.4s ease-in-out infinite both circle-animation;
        display: block;
        fill: transparent;
        stroke: ${({ theme, color }) =>
            color ? theme.icons[color].color.default : 'currentColor'};
        stroke-linecap: round;
        stroke-dasharray: 283;
        stroke-dashoffset: 280;
        stroke-width: 10px;
        transform-origin: 50% 50%;
    }

    /* SVG Animation */
    @keyframes svg-animation {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    /* Circle Animation */
    @keyframes circle-animation {
        0%,
        25% {
            stroke-dashoffset: 280;
            transform: rotate(0);
        }

        50%,
        75% {
            stroke-dashoffset: 75;
            transform: rotate(45deg);
        }

        100% {
            stroke-dashoffset: 280;
            transform: rotate(360deg);
        }
    }
`;
