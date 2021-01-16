import React from 'react';
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

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityHomePage: page } = data;

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <HeroSection
                title={page.hero.title}
                copy={page.hero.subtitle}
                bgImage={page.hero.image}
                rebrandLink={page.hero.action.link.slug.current}
                rebrandLinkText={page.hero.action.text}
            />
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
                subtitle
                title
                image {
                    asset {
                        fluid {
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
        subtitle: string;
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
