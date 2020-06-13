import { isSSR } from '@lib/ssr';

/**
 * Load our Stage 2 fonts. These are more fully featured and robust than stage 1.
 * Inspired by: https://www.zachleat.com/web/css-tricks-web-fonts/
 *
 * * Edge/Internet explorer do not support this Font Loading API. Our stage 1 fonts should be sufficient enough to
 * * cover our bases, so we are not going to provide a fallback, since most of our users come form mobile/modern
 * * devices anyway. If we do get an IE user, the stage 1 fonts will work out just dandy.
 *
 * @since 1.0.0
 */

export const loadStage2Fonts = () => {
    if (isSSR) {
        return null;
    }

    if (!('fonts' in document)) {
        return null;
    }

    const heading = new FontFace(
        'Greycliff',
        "local('Greycliff CF Heavy'), url(/fonts/stage-2/GreycliffCF-Heavy--stage2.woff2) format('woff2'), url(/fonts/stage-2/GreycliffCF-Heavy--stage2.woff) format('woff')",
        {
            weight: '900',
        }
    );

    const regularBody = new FontFace(
        'Greycliff',
        "local('Greycliff CF Regular'), url(/fonts/stage-2/GreycliffCF-Regular--stage2.woff2) format('woff2'), url(/fonts/stage-2/GreycliffCF-Regular--stage2.woff.woff) format('woff')",
        {
            weight: '400',
        }
    );
    const boldBody = new FontFace(
        'Greycliff',
        "local('Greycliff CF Bold'), url(/fonts/stage-2/GreycliffCF-Bold--stage2.woff2) format('woff2'), url(/fonts/stage-2/GreycliffCF-Bold--stage2.woff) format('woff')",
        {
            weight: '700',
        }
    );
    Promise.all([heading.load(), regularBody.load(), boldBody.load()]).then(
        function (fonts) {
            fonts.forEach(function (font) {
                document.fonts.add(font);
            });
        }
    );
};
