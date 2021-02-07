import { AvailableGridSize } from '@nerve/core/tokens';
import { IOverlayBase } from '../OverlayBase/OverlayBase';

interface IModal extends IOverlayBase {
    containerSize?: AvailableGridSize;
}
