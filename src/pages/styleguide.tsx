import React from 'react';
import { BodyText, Icon, Heading } from '@components/foundations';
import { Layout } from '@components/layout';

import {
    FillButton,
    OutlineButton,
    GhostButton,
    TextButton,
} from '@components/actions';

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
            <FillButton
                startIcon={<Icon name="Facebook" size="xs" />}
                size="m"
                color="primary"
                to="/styleguide"
                animateOnClick
                animateIconOnHover
            >
                Hello
            </FillButton>
            <FillButton
                size="m"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                to="/styleguide"
            >
                Check out the show
            </FillButton>
            <FillButton
                to="/styleguide"
                size="s"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                endIcon={<Icon name="Facebook" size="xs" />}
            >
                Check out the show
            </FillButton>
            <FillButton size="m" color="secondary" to="/styleguide">
                Check out the show
            </FillButton>
            <FillButton size="s" color="secondary" to="/styleguide">
                Check out the show
            </FillButton>
            <FillButton size="m" color="tertiary" to="/styleguide">
                Check out the show
            </FillButton>
            <FillButton size="s" color="tertiary" to="/styleguide">
                Check out the show
            </FillButton>
        </div>
        <FillButton size="m" color="primary" to="/styleguide">
            Check out the show
        </FillButton>
        <FillButton size="s" color="primary" to="/styleguide">
            Check out the show
        </FillButton>
        <FillButton size="m" color="secondary" to="/styleguide">
            Check out the show
        </FillButton>
        <FillButton size="s" color="secondary" to="/styleguide">
            Check out the show
        </FillButton>
        <FillButton size="m" color="tertiary" to="/styleguide">
            Check out the show
        </FillButton>
        <FillButton size="s" color="tertiary" to="/styleguide">
            Check out the show
        </FillButton>

        <div
            style={{
                background: `#FFFFFF`,
                padding: `24px`,
                marginBottom: `48px`,
            }}
        >
            <OutlineButton
                startIcon={<Icon name="Facebook" size="xs" />}
                size="m"
                color="primary"
                to="/styleguide"
                animateOnClick
                animateIconOnHover
            >
                Hello
            </OutlineButton>
            <OutlineButton
                size="m"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                to="/styleguide"
            >
                Check out the show
            </OutlineButton>
            <OutlineButton
                to="/styleguide"
                size="s"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                endIcon={<Icon name="Facebook" size="xs" />}
            >
                Check out the show
            </OutlineButton>
            <OutlineButton size="m" color="secondary" to="/styleguide">
                Check out the show
            </OutlineButton>
            <OutlineButton size="s" color="secondary" to="/styleguide">
                Check out the show
            </OutlineButton>
            <OutlineButton size="m" color="tertiary" to="/styleguide">
                Check out the show
            </OutlineButton>
            <OutlineButton size="s" color="tertiary" to="/styleguide">
                Check out the show
            </OutlineButton>
        </div>
        <OutlineButton size="m" color="primary" to="/styleguide">
            Check out the show
        </OutlineButton>
        <OutlineButton size="s" color="primary" to="/styleguide">
            Check out the show
        </OutlineButton>
        <OutlineButton size="m" color="secondary" to="/styleguide">
            Check out the show
        </OutlineButton>
        <OutlineButton size="s" color="secondary" to="/styleguide">
            Check out the show
        </OutlineButton>
        <OutlineButton size="m" color="tertiary" to="/styleguide">
            Check out the show
        </OutlineButton>
        <OutlineButton size="s" color="tertiary" to="/styleguide">
            Check out the show
        </OutlineButton>

        <div
            style={{
                background: `#FFFFFF`,
                padding: `24px`,
                marginBottom: `48px`,
            }}
        >
            <GhostButton
                startIcon={<Icon name="Facebook" size="xs" />}
                size="m"
                color="primary"
                to="/styleguide"
                animateOnClick
                animateIconOnHover
            >
                Hello
            </GhostButton>
            <GhostButton
                size="m"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                to="/styleguide"
            >
                Check out the show
            </GhostButton>
            <GhostButton
                to="/styleguide"
                size="s"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                endIcon={<Icon name="Facebook" size="xs" />}
            >
                Check out the show
            </GhostButton>
            <GhostButton size="m" color="secondary" to="/styleguide">
                Check out the show
            </GhostButton>
            <GhostButton size="s" color="secondary" to="/styleguide">
                Check out the show
            </GhostButton>
            <GhostButton size="m" color="tertiary" to="/styleguide">
                Check out the show
            </GhostButton>
            <GhostButton size="s" color="tertiary" to="/styleguide">
                Check out the show
            </GhostButton>
        </div>
        <GhostButton size="m" color="primary" to="/styleguide">
            Check out the show
        </GhostButton>
        <GhostButton size="s" color="primary" to="/styleguide">
            Check out the show
        </GhostButton>
        <GhostButton size="m" color="secondary" to="/styleguide">
            Check out the show
        </GhostButton>
        <GhostButton size="s" color="secondary" to="/styleguide">
            Check out the show
        </GhostButton>
        <GhostButton size="m" color="tertiary" to="/styleguide">
            Check out the show
        </GhostButton>
        <GhostButton size="s" color="tertiary" to="/styleguide">
            Check out the show
        </GhostButton>

        <div
            style={{
                background: `#FFFFFF`,
                padding: `24px`,
                marginBottom: `48px`,
            }}
        >
            <TextButton
                startIcon={<Icon name="Facebook" size="xs" />}
                size="m"
                color="primary"
                to="/styleguide"
                animateOnClick
                animateIconOnHover
            >
                Hello
            </TextButton>
            <TextButton
                size="m"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                to="/styleguide"
            >
                Check out the show
            </TextButton>
            <TextButton
                to="/styleguide"
                size="s"
                color="primary"
                startIcon={<Icon name="Facebook" size="xs" />}
                endIcon={<Icon name="Facebook" size="xs" />}
            >
                Check out the show
            </TextButton>
            <TextButton size="m" color="secondary" to="/styleguide">
                Check out the show
            </TextButton>
            <TextButton size="s" color="secondary" to="/styleguide">
                Check out the show
            </TextButton>
            <TextButton size="m" color="tertiary" to="/styleguide">
                Check out the show
            </TextButton>
            <TextButton size="s" color="tertiary" to="/styleguide">
                Check out the show
            </TextButton>
        </div>
        <TextButton size="m" color="primary" to="/styleguide">
            Check out the show
        </TextButton>
        <TextButton size="s" color="primary" to="/styleguide">
            Check out the show
        </TextButton>
        <TextButton size="m" color="secondary" to="/styleguide">
            Check out the show
        </TextButton>
        <TextButton size="s" color="secondary" to="/styleguide">
            Check out the show
        </TextButton>
        <TextButton size="m" color="tertiary" to="/styleguide">
            Check out the show
        </TextButton>
        <TextButton size="s" color="tertiary" to="/styleguide">
            Check out the show
        </TextButton>
    </Layout>
);

export default StyleguidePage;
