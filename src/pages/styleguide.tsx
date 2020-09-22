import React from 'react';
import { BodyText, Heading } from '@components/foundations';
import { Layout } from '@components/layout';

import { Button } from '@components/actions';

const StyleguidePage: React.FC = () => (
    <Layout noHeader noFooter>
        {/* Body Text Regular */}
        <BodyText size="s" color="light" tag="p">
            Small body text
        </BodyText>
        <BodyText size="m" color="light" tag="p">
            Medium body text
        </BodyText>
        <BodyText size="l" color="light" tag="p">
            Large body text
        </BodyText>
        <BodyText size="xl" color="light" tag="p">
            Extra Large body text
        </BodyText>

        <BodyText size="s" color="light" weight="bold" tag="p">
            Small bold body text
        </BodyText>
        <BodyText size="m" color="light" weight="bold" tag="p">
            Medium bold body text
        </BodyText>
        <BodyText size="l" color="light" weight="bold" tag="p">
            Large bold body text
        </BodyText>
        <BodyText size="xl" color="light" weight="bold" tag="p">
            Extra Large bold body text
        </BodyText>

        {/* Standard Heading */}
        <Heading size="s" tag="h1" color="light">
            Small Standard Heading
        </Heading>
        <Heading size="m" tag="h2" color="light">
            Medium Standard Heading
        </Heading>
        <Heading size="l" tag="h3" color="light">
            Large Standard Heading
        </Heading>
        <Heading size="xl" tag="h3" color="light">
            Extra Large Standard Heading
        </Heading>

        <div
            style={{
                background: `#FFFFFF`,
                padding: `24px`,
                marginBottom: `48px`,
            }}
        >
            <Button size="m" color="primary">
                Check out the show
            </Button>
            <Button size="s" color="primary">
                Check out the show
            </Button>
            <Button size="m" color="secondary">
                Check out the show
            </Button>
            <Button size="s" color="secondary">
                Check out the show
            </Button>
            <Button size="m" color="tertiary">
                Check out the show
            </Button>
            <Button size="s" color="tertiary">
                Check out the show
            </Button>
        </div>
        <Button size="m" color="primary">
            Check out the show
        </Button>
        <Button size="s" color="primary">
            Check out the show
        </Button>
        <Button size="m" color="secondary">
            Check out the show
        </Button>
        <Button size="s" color="secondary">
            Check out the show
        </Button>
        <Button size="m" color="tertiary">
            Check out the show
        </Button>
        <Button size="s" color="tertiary">
            Check out the show
        </Button>
    </Layout>
);

export default StyleguidePage;
