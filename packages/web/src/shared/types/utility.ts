/**
 * Merges the element's props with our custom props, and will override the element's props when necessary.
 *
 * @param T The name of the element to extend
 * @param P An object with our custom properties
 */
export type MergeElementProps<
    T extends React.ElementType,
    P extends Record<string, unknown>
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 *
 * @internal
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
    ? Omit<T, K>
    : never;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
    <C extends React.ElementType>(
        props: {
            /**
             * The component used for the root node.
             * Either a string to use a HTML element or a component.
             */
            component: C;
        } & OverrideProps<M, C>
    ): JSX.Element;
    (props: DefaultComponentProps<M>): JSX.Element;
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
    M extends OverridableTypeMap,
    C extends React.ElementType
    > = (
        & BaseProps<M>
        & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>
    );

/**
 * Props if `component={Component}` is NOT used.
 */
// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap> =
    & BaseProps<M>
    & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;

/**
 * Props defined on the component (+ common material-ui props).
 */
// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> =
    & M['props']
    & CommonProps;

/**
 * Props that are valid for all Nerve components.
 * * each component declares it's classes in a separate interface
 */
export interface CommonProps {
    className?: string;
}

export interface OverridableTypeMap {
    props: Record<string, unknown>;
    defaultComponent: React.ElementType;
}
