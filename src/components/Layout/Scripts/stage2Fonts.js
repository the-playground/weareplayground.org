import { isSSR } from '../../../__utility__/ssr';

export const loadStage2Fonts = () => {
	if (isSSR) {
		return '';
	}

	if ('fonts' in document) {
		const regular = new FontFace(
			'Greycliff',
			"url(fonts/stage-2/GreycliffCF-Regular-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-Regular-all--stage2.woff.woff) format('woff')", // eslint-disable-line
			{
				weight: '400',
			}
		);
		const demiBold = new FontFace(
			'Greycliff',
			"url(fonts/stage-2/GreycliffCF-DemiBold-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-DemiBold-all--stage2.woff) format('woff')", // eslint-disable-line
			{
				weight: '600',
			}
		);
		const bold = new FontFace(
			'Greycliff',
			"url(fonts/stage-2/GreycliffCF-Bold-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-Bold-all--stage2.woff) format('woff')", // eslint-disable-line
			{
				weight: '700',
			}
		);
		const heavy = new FontFace(
			'Greycliff',
			"url(fonts/stage-2/GreycliffCF-Heavy-all--stage2.woff2) format('woff2'), url(fonts/stage-2/GreycliffCF-Heavy-all--stage2.woff) format('woff')", // eslint-disable-line
			{
				weight: '900',
			}
		);
		Promise.all([heavy.load(), bold.load(), demiBold.load(), regular.load()]).then(function(fonts) {
			fonts.forEach(function(font) {
				document.fonts.add(font);
			});
		});
	}
};
