import { useStaticQuery, graphql } from 'gatsby';

export const useConfig = () => {
	/**
	 * Query for all the configs our site might need to use for every page.
	 */
	const config = useStaticQuery(graphql`
		query GlobalMetaQuery {
			...companyConfigFragment
			...siteConfigFragment
		}
	`);

	const site = config?.prismic?.siteconfig;
	const company = config?.prismic?.companyconfig;

	return { site, company };
};
