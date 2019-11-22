import React from 'react';
import { Layout } from '../components/Layout';

import { BodyText, BodyTitle, Heading, GrungeHeading } from '../components/_foundations/typography';

const StyleguidePage = () => (
	<Layout noHeader noFooter>
		{/* Body Text Regular */}
		<BodyText size="s">Small body text</BodyText>
		<BodyText size="m">Medium body text</BodyText>
		<BodyText size="l">Large body text</BodyText>
		<BodyText size="xl">Extra Large body text</BodyText>

		{/* Body Text Bold */}
		<BodyText size="s" isBold>
			Small bold body bext
		</BodyText>
		<BodyText size="m" isBold>
			Medium bold body bext
		</BodyText>
		<BodyText size="l" isBold>
			Large bold body text
		</BodyText>
		<BodyText size="xl" isBold>
			Extra Large bold body text
		</BodyText>

		{/* Body Title */}
		<BodyTitle size="s">Small Body Title</BodyTitle>
		<BodyTitle size="m">Medium Body Title</BodyTitle>
		<BodyTitle size="l">Large Body Title</BodyTitle>

		{/* Standard Heading */}
		<Heading size="s" tag="h1">
			Small Standard Heading
		</Heading>
		<Heading size="m" tag="h2">
			Medium Standard Heading
		</Heading>
		<Heading size="l" tag="h3">
			Large Standard Heading
		</Heading>
		<Heading size="xl" tag="h3">
			Extra Large Standard Heading
		</Heading>

		<GrungeHeading size="s" tag="h1">
			Small Grunge Heading
		</GrungeHeading>
		<GrungeHeading size="m" tag="h2">
			Medium Grunge Heading
		</GrungeHeading>
		<GrungeHeading size="l" tag="h3">
			Large Grunge Heading
		</GrungeHeading>

		{/* Grunge Heading */}
	</Layout>
);

export default StyleguidePage;
