import {
    AvailableComponentSpacing,
    AvailableElevation,
} from '@nerve/core/tokens';

import { PaperProps } from '../../../Paper/Paper.types';

export interface CardProps extends PaperProps {
    layout: 'inline' | 'stacked';
    gutter?: AvailableComponentSpacing;
    elevation?: AvailableElevation;
}
