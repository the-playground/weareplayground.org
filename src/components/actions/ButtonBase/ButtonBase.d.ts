import { LinkProps } from '@components/utility';
import { IconProps } from '@components/foundations';
import { WithOptional } from '@type/utils';

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
