import { AvailableGridSize } from '@web/core/tokens';

export type AvailableContainerType = 'full' | 'contained';

export interface ContainerProps {
    maxWidth?: AvailableGridSize;
    type?: AvailableContainerType;
    className?: string;
    others?: any;
}
