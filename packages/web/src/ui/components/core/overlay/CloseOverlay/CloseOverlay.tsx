import React from 'react';
import { Icon } from '@web/ui/core';

import { IOverlayBase } from '../OverlayBase/OverlayBase';
import * as styled from './CloseOverlay.styles';

export const CloseOverlay: React.FC<ICloseOverlay> = ({
    onCloseHandler,
    icon = <Icon name="Cancel" size="s" color="dark" />,
}) => {
    return (
        <styled.CloseOverlay
            onClick={() => onCloseHandler(false)}
            className="close"
            type="button"
            aria-label="close"
        >
            {icon}
        </styled.CloseOverlay>
    );
};

interface ICloseOverlay extends Pick<IOverlayBase, 'onCloseHandler'> {
    icon?: JSX.Element;
}
