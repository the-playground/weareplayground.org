import { isSSR } from '../../../__utility__/ssr';

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
		return '';
	}

	if (!('fonts' in document)) {
		return '';
	}

	const regular = new FontFace(
		'Greycliff',
		"url(./fonts/stage-2/GreycliffCF-Regular-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-Regular-all--stage2.woff.woff) format('woff')", // eslint-disable-line
		{
			weight: '400',
		}
	);
	const demiBold = new FontFace(
		'Greycliff',
		"url(./fonts/stage-2/GreycliffCF-DemiBold-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-DemiBold-all--stage2.woff) format('woff')", // eslint-disable-line
		{
			weight: '600',
		}
	);
	const heavy = new FontFace(
		'Greycliff',
		"url(./fonts/stage-2/GreycliffCF-Heavy-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-Heavy-all--stage2.woff) format('woff')", // eslint-disable-line
		{
			weight: '900',
		}
	);
	Promise.all([heavy.load(), demiBold.load(), regular.load()]).then(function(fonts) {
		fonts.forEach(function(font) {
			document.fonts.add(font);
		});
	});
};
