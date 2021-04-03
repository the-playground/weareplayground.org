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
