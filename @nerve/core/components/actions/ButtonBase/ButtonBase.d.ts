import { LinkProps } from '@nerve/core/components/utility';
import { IconProps } from '@nerve/core/components/media';

export type ButtonSize = 's' | 'm';

export interface ButtonBaseProps extends LinkProps {
    size: ButtonSize;
    fullWidth?: true | undefined;
    animateOnClick?: true | undefined;
    animateIconOnHover?: true | undefined;
    startIcon?: React.ReactElement<IconProps>;
    endIcon?: React.ReactElement<IconProps>;
    isLoading?: boolean;
}
