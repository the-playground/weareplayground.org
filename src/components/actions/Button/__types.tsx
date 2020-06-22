import { LinkProps } from '@components/utility';

export type ButtonSize = 's' | 'm';

export interface ButtonProps {
    link?: LinkProps;
    size: ButtonSize;
    type: 'primary' | 'secondary' | 'tertiary';
    width?: 'auto' | 'full';
    className?: string;
}
