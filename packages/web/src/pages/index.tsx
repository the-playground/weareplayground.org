import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityFluidImage,
} from '@nerve/shared/types';

import { SubscribeSection } from '@nerve/domains/engagement';

import PageTemplate from '@nerve/domains/page/PageTemplate';
import {
    ArchiveSection,
    HeroSection,
    RebrandSection,
} from '@nerve/domains/page/home';

import { OutlineButton, Modal } from '@nerve/core/components';
import { useUIContext } from '@nerve/shared/context';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityHomePage: page } = data;
    const { overlay } = useUIContext();

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <HeroSection
                title={page.hero.title}
                copy={page.hero.copy}
                bgImage={page.hero.image.asset.fluid}
                rebrandLink={page.hero.action.link.slug.current}
                rebrandLinkText={page.hero.action.text}
            />
            <OutlineButton onClick={overlay.toggle} color="primary" size="m">
                Open Modal
            </OutlineButton>
            <Modal
                isOpen={overlay.isOpen}
                onRequestClose={() => overlay.setIsOpen(false)}
                title="modal test"
            >
                This is a modal and I have opened it.
            </Modal>
            <RebrandSection />
            <ArchiveSection />
            <SubscribeSection />
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
                image {
                    asset {
                        fluid(maxWidth: 1800) {
                            ...GatsbySanityImageFluid_noBase64
                        }
                    }
                }
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
        image: SanityFluidImage;
    };
}

export default HomePage;
