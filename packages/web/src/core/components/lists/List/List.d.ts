import { AvailableComponentSpacing } from '@nerve/core/tokens';

export interface IList {
    className?: string;
    heading?: JSX.Element;
    gutter?: AvailableComponentSpacing;
    itemSpacing?: AvailableComponentSpacing;
    headingSpacing?: AvailableComponentSpacing;
    disablePadding?: true;
}
