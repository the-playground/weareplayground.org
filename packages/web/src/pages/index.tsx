import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
} from '@nerve/shared/types';

import { NewsSubscribeCTA } from '@nerve/domains/engagement';

import PageTemplate from '@nerve/domains/page/PageTemplate';
import {
    ArchiveSection,
    HeroSection,
    RebrandSection,
} from '@nerve/domains/page/home';

import { OutlineButton, Modal } from '@nerve/core/components';
import { useOverlay } from '@nerve/shared/hooks';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityHomePage: page } = data;
    const [isOpen, setIsOpen, toggle] = useOverlay();

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <HeroSection
                title={page.hero.title}
                copy={page.hero.copy}
                rebrandLink={page.hero.action.link.slug.current}
                rebrandLinkText={page.hero.action.text}
                bgImage={{
                    image: page.hero.image.asset,
                }}
            />
            <OutlineButton onClick={toggle} color="primary" size="m">
                Open Modal
            </OutlineButton>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                title="modal test"
            >
                This is a modal and I have opened it.
            </Modal>
            <RebrandSection />
            <ArchiveSection />
            <NewsSubscribeCTA />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        sanityHomePage {
            title
            slug {
                current
            }
            _updatedAt
            seo {
                title
                description
                hide
                publishedAt
                image {
                    alt
                    asset {
                        url
                    }
                }
            }

            hero {
                title
                copy
                action {
                    text
                    link {
                        ... on SanityPost {
                            slug {
                                current
                            }
                        }
                    }
                }
                image {
                    asset {
                        _id
                        gatsbyImageData(
                            placeholder: BLURRED
                            layout: FULL_WIDTH
                        )
                    }
                }
            }
        }
    }
`;

interface PageData {
    sanityHomePage: HomePageData;
}

interface HomePageData extends SanityDocument {
    hero: {
        title: string;
        copy: string;
        action: {
            text: string;
            link: {
                slug: {
                    current: string;
                };
            };
        };
        image: SanityImageData;
    };
}

export default HomePage;
