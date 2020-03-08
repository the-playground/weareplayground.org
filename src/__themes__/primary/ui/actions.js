import palette from '../palette';

const actions = {
    primary: {
        background: palette.ghostlight,
        backgroundHover: palette.grayscale.light5,
        text: palette.blackout.base,
        border: palette.ghostlight,
        borderHover: palette.grayscale.light5,
    },

    secondary: {
        background: palette.blackout.base,
        backgroundHover: palette.blackout.dark,
        text: palette.ghostlight,
        border: palette.blackout.base,
        borderHover: palette.blackout.dark,
    },

    tertiary: {
        background: palette.spikeTape.base,
        backgroundHover: palette.spikeTape.light,
        text: palette.ghostlight,
        border: palette.spikeTape.base,
        borderHover: palette.spikeTape.light,
    },

    // Success

    // Danger
};

export default actions;
