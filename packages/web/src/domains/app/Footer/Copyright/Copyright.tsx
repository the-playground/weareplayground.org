import React from 'react';

import { Link } from '@nerve/core/routing';
import { BodyText, Container } from '@nerve/core/components';
import { useConfigContext } from '@nerve/shared/context';

import * as styled from './__styles';

const LinkItem: React.FC<{ slug: string; text: string }> = ({ slug, text }) => (
    <li>
        <Link to={slug} activeClassName="--is-active">
            <BodyText as="span" size="s" weight="bold" color="medium">
                {text}
            </BodyText>
        </Link>
    </li>
);

export const Copyright: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { company, links } = useConfigContext();

    return (
        <styled.Copyright>
            <Container className="container">
                <BodyText size="s" color="medium">
                    &copy; {currentYear} {company.legalName} All rights
                    reserved.
                </BodyText>
                <ul className="links">
                    {/* {links.privacyPolicyPage && (
                        <LinkItem
                            slug={links.privacyPolicyPage}
                            text="privacy policy"
                            key="privacy policy"
                        />
                    )}

                    {links.termsPage && (
                        <LinkItem
                            slug={links.termsPage}
                            text="terms & conditions"
                            key="terms"
                        />
                    )} */}

                    {/* {sitemap && (
                        <LinkItem slug={sitemap} text="sitemap" key="sitemap" />
                    )} */}
                </ul>
            </Container>
        </styled.Copyright>
    );
};
