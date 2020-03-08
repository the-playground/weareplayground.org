import React from 'react';
import Helmet from 'react-helmet';
import { useConfigContext } from '../../../__hooks__/useContext';

/**
 *
 * TODO: Research rel="canonical" meta tags.
 */
/**
 * Component: SEOGlobal
 *
 * @description Handles rendering global static meta tags for improved SEO
 * @since 1.0.0
 *
 * @param {object} company
 * @param {object} verifications
 */
const SEOGlobal = () => {
    /**
     * Query for all the metadata our site needs to use for every page.
     */
    const { site, company } = useConfigContext();

    if (!site || !company) return <></>;

    const facebookAppID = company.facebook_app_id ? company.facebook_app_id : null;
    const googleVerification = site.verification_google ? site.verification_google : null;
    const bingVerification = site.verification_bing ? site.verification_bing : null;
    const nortonVerification = site.verification_norton ? site.verification_norton : null;

    return (
        <Helmet>
            {/* Default language and direction */}
            <html lang="en" dir="ltr" />
            {/* Handle site verifications generation */}
            {googleVerification ? <meta name="google-site-verification" content={googleVerification} /> : ``}
            {bingVerification ? <meta name="msvalidate.01" content={bingVerification} /> : ``}
            {nortonVerification ? <meta name="norton-safeweb-site-verification" content={nortonVerification} /> : ``}

            {/* Facebook App ID for your FB Business App */}
            {facebookAppID ? <meta property="fb:app_id" content={facebookAppID} /> : ``}

            {/* Google Specific Tags -- prevent search boc from showing up on Google */}
            <meta name="google" content="nositelinkssearchbox" />

            {/* Canonical URL */}
            {/* <link rel="canonical" href={getCurrentRootURL()} /> */}

            {/* Set geo location for business */}
            <meta name="geo.region" content={`US-${company.location_state_code}`} />
            <meta name="geo.placename" content={company.location_city} />

            {/* Global OpenGraph meta */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:sitename" content={company.name} />
            <meta name="og:email" content={company.contact_email} />
            <meta name="og:country-name" content="USA" />
            <meta name="og:region" content={company.location_state_code} />
            <meta name="og:postal-code" content={company.location_zip} />
        </Helmet>
    );
};

export default SEOGlobal;
