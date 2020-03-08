import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { borderRadius, spacing, typography } from '../../../__tokens__';

/**
 * Define button size styles at each available button size
 *
 * @since 1.0.0
 */
export const buttonSizes = {
    s: css`
		${typography.bodyBold.Small}
		padding: ${spacing.component.xs} ${spacing.component.m};
	`,
    m: css`
		${typography.bodyBold.Medium}
		padding: ${spacing.component.s} ${spacing.component.m};
	`,
};

/**
 * Define style properties for available "types" of buttons.
 *
 * @since 1.0.0
 */
export const buttonTypes = {
    standard: css`
        border: none;
    `,
    // ghost: css`
    // 	background: transparent;
    // 	border: 2px solid;
    // `,
};

/**
 * Creates a template to be applied to our button color themes.
 * This prevents us from writing out a bunch of styles over and over again.
 * Takes in the theme passed into the button ar runtime and fetches the appropriate "action"
 * theme from our globally defined styled components theme.
 *
 * @param {string} specifiedTheme - the ui theme prop passed into the button
 * @param {object} availableThemes - the available "action" themes in our application
 */

export const applyButtonColorTheme = (specifiedTheme, availableThemes) => {
    // Retrieve the requested theme from our available action themes
    const selectedTheme = availableThemes[specifiedTheme];

    return css`
        background-color: ${selectedTheme.background};
        border-color: ${selectedTheme.border};
        color: ${selectedTheme.text};

        &:hover {
            background-color: ${selectedTheme.backgroundHover};
            border-color: ${selectedTheme.borderHover};
        }

        &:focus {
        }

        &:active {
        }

        &:disabled {
        }
    `;
};

export const Button = styled(Link)`
	align-items: center;
	border-radius: ${borderRadius.default};
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	margin-bottom: 100px;
	margin-left: 100px;
	width: auto;

	&:disabled {
		cursor: not-allowed;
	}

	&:focus{
		outline: none;
	}

	/* Set Themeable Properties */
	${props => applyButtonColorTheme(props.variant, props.theme.ui.actions)}
	${props => buttonSizes[props.size]}
	${props => buttonTypes[props.type]}
`;
