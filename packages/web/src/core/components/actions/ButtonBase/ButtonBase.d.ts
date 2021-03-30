import { IconProps } from '@nerve/core/components/media';
import { InternalLink, ExternalLink } from '@nerve/core/routing';
import {
    MergeElementProps,
    OverrideProps,
    OverridableComponent,
    OverridableTypeMap,
} from '@nerve/shared/types';

// Trying to infer types based on https://www.erikverweij.dev/blog/making-your-components-extensible-with-typescript/
// AND https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/ButtonBase/ButtonBase.d.ts

export type ButtonSize = 's' | 'm';

type CoreButtonProps = {
    size: ButtonSize;
    fullWidth?: true | undefined;
    animateOnClick?: true | undefined;
    animateIconOnHover?: true | undefined;
    startIcon?: React.ReactElement<IconProps>;
    endIcon?: React.ReactElement<IconProps>;
    isLoading?: boolean;
};

export type ButtonBaseProps<Component extends React.ElementType = 'button'> = {
    component?: Component;
} & MergeElementProps<Component, CoreButtonProps>;

// export interface ButtonBaseTypeMap<
//     P = Record<string, unknown>,
//     D extends React.ElementType = 'button'
// > {
//     props: P & {
//         size: ButtonSize;
//         fullWidth?: true | undefined;
//         animateOnClick?: true | undefined;
//         animateIconOnHover?: true | undefined;
//         startIcon?: React.ReactElement<IconProps>;
//         endIcon?: React.ReactElement<IconProps>;
//         isLoading?: boolean;
//     };
//     defaultComponent: D;
// }

/**
 * utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
// export interface ExtendButtonBase<M extends OverridableTypeMap> {
//     props: M['props'] & OverridableComponent<M>;
//     defaultComponent: M['defaultComponent'];
// }

// declare const ButtonBase: ExtendButtonBase<ButtonBaseTypeMap>;

// export type ButtonBaseProps<
//     D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
//     P = Record<string, unknown>
// > = OverrideProps<ButtonBaseTypeMap<P, D>, D>;
