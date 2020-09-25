import { AvailableActionTheme } from '@themes/theme.d';
import { ButtonBaseProps } from '../ButtonBase/BaseButton';

export interface FillButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface OutlineButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface GhostButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}

export interface TextButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
}
