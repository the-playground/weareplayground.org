import { AvailableGridSize } from '@web/ui/tokens';
import { IOverlayBase } from '../OverlayBase/OverlayBase';

interface IModal extends IOverlayBase {
    containerSize?: AvailableGridSize;
}
