import { LinkProps } from '@components/utility';

export type ButtonSize = 's' | 'm';

export interface ButtonBaseProps {
    link?: LinkProps;
    size: ButtonSize;
    fullWidth?: true | undefined;
    clickAnimation?: true | undefined;
    className?: string;
}
