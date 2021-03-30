import Head from 'next/head';
import { useConfigContext } from '@nerve/shared/context';
import {
    organizationSchema,
    webSiteSchema,
    webPageSchema,
    WebPageSchemaProps,
} from './schemas';

/**
 * This robust component handles assembling and generating JSON-LD structured data
 * in the site <head> according to the https://schema.org spec. Structured data
 * is the future of advanced SEO and unlocks advanced understanding of a website
 * by search engines.
 *
 * Note that we are using a new and advanced structured data method called a node graph, first
 * implemented by Yoast (https://yoast.com/). Later, this method was discussed in a
 * blog article by MOZ (https://moz.com/blog/writing-structured-data-guide). This method makes
 * it super-easy to link and reference schemas between types.
 *
 * @param siteConfig The global configuration object for the site.
 * @param pageDataSchema Data needed to generate the schema markup for the current page.
 * @param otherSchemas An array of additional custom schemas to add to the schema graph.
 */
export const StructuredData: React.FC<StructuredDataProps> = ({
    pageSchemaData,
    otherSchemas = [],
}) => {
    const { company } = useConfigContext();

    // These schemas are generated on every site page regardless of their type.
    const defaultSchemas = [
        organizationSchema(company),
        webSiteSchema(company),
        webPageSchema(company.website, { ...pageSchemaData }),
    ];

    const schemas = [...defaultSchemas, ...otherSchemas];

    const data = `{
		"@context": "https://schema.org/",
		"@graph": [${schemas.map((schema) => schema)}]
    }`;

    return (
        <Head>
            <script type="application/ld+json">{data}</script>
        </Head>
    );
};

export interface StructuredDataProps {
    pageSchemaData: WebPageSchemaProps;
    otherSchemas?: CallableFunction[];
}
