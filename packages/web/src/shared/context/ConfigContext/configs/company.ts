import { SanityImage } from '@nerve/shared/types';

export const companyConfigQuery = `*[_type == "companyConfig"][0] {
    city,
    ein,
    emailAuditions,
    emailGeneral,
    emailTicketing,
    facebook,
    foundingDate,
    github,
    instagram,
    legacyLegalName,
    legacyName,
    legacyWebsite,
    legalName,
    "logoOnDark": {
        "alt": logoOnDark.alt,
        "url": logoOnDark.asset->url,
        "dimensions": logoOnDark.asset->metadata.dimensions{
            width,
            height
        }
    },
    "logoOnLight": {
        "alt": logoOnLight.alt,
        "url": logoOnLight.asset->url,
        "dimensions": logoOnLight.asset->metadata.dimensions{
            width,
            height
        }
    },
    name,
    spotify,
    state,
    stateCode,
    website,
    youtube,
    zip,
}`;

export interface ICompanyConfig {
    city: string;
    ein: string;
    emailAuditions: string;
    emailGeneral: string;
    emailTicketing: string;
    facebook: string;
    foundingDate: string;
    github: string;
    instagram: string;
    legacyLegalName: string;
    legacyName: string;
    legacyWebsite: string;
    legalName: string;
    logoOnDark: SanityImage;
    logoOnLight: SanityImage;
    name: string;
    spotify: string;
    state: string;
    stateCode: string;
    website: string;
    youtube: string;
    zip: string;
}
