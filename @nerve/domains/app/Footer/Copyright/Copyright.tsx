import React from 'react';

import { Link } from '@nerve/core/components/utility';
import { BodyText, Container } from '@nerve/core/components';
import { useConfigContext, useLinkMapContext } from '@nerve/shared/context';

import * as styled from './__styles';

const LinkItem: React.FC<{ slug: string; text: string }> = ({ slug, text }) => (
    <li>
        <Link to={slug} activeClassName="--is-active">
            <BodyText tag="span" size="s" weight="bold" color="medium">
                {text}
            </BodyText>
        </Link>
    </li>
);

export const Copyright = () => {
    const currentYear = new Date().getFullYear();
    const config = useConfigContext();
    const { privacyPolicy, terms, sitemap } = useLinkMapContext();

    return (
        <styled.Copyright>
            <Container className="container">
                <BodyText size="s" color="medium" tag="p">
                    &copy; {currentYear} {config.legal_name} All rights
                    reserved.
                </BodyText>
                <ul className="links">
                    {privacyPolicy && (
                        <LinkItem
                            slug={privacyPolicy}
                            text="privacy policy"
                            key="privacy policy"
                        />
                    )}

                    {terms && (
                        <LinkItem
                            slug={terms}
                            text="terms & conditions"
                            key="terms"
                        />
                    )}

                    {sitemap && (
                        <LinkItem slug={sitemap} text="sitemap" key="sitemap" />
                    )}
                </ul>
            </Container>
        </styled.Copyright>
    );
};
