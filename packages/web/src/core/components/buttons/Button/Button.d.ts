import { AvailableActionTheme } from '@nerve/core/themes';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';

export interface FillButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface OutlineButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface GhostButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface IconButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface TextButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}
