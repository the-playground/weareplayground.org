export const schema = {
    name: 'companyConfig',
    title: 'Company Config',
    type: 'document',
    icon: (): string => '',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'legacyName',
            title: 'Legacy Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'legalName',
            title: 'Legal Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'legacyLegalName',
            title: 'Legacy Legal Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'ein',
            title: 'EIN',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'foundingDate',
            title: 'Founding Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'logoOnLight',
            title: 'Logo » On Light',
            description: 'Company logo on a light background',
            type: 'imageWithAlt',
        },
        {
            name: 'logoOnDark',
            title: 'Logo » On Dark',
            description: 'Company logo on a dark background',
            type: 'imageWithAlt',
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
        {
            name: 'legacyWebsite',
            title: 'Legacy Website',
            type: 'url',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
        {
            name: 'emailGeneral',
            title: 'Email » General',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'emailTicketing',
            title: 'Email » Ticketing',
            type: 'string',
        },
        {
            name: 'emailAuditions',
            title: 'Email » Auditions',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'state',
            title: 'State',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'stateCode',
            title: 'State Code',
            type: 'string',
            validation: (Rule: any) => Rule.required().max(2),
        },
        {
            name: 'zip',
            title: 'Zip Code',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(5).max(5),
        },
        {
            name: 'facebook',
            title: 'Facebook Profile Link',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
        {
            name: 'spotify',
            title: 'Spotify Profile Link',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
        {
            name: 'instagram',
            title: 'Instagram Profile Link',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
        {
            name: 'youtube',
            title: 'Youtube Profile Link',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
        {
            name: 'github',
            title: 'Github Profile Link',
            type: 'string',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
    ],
};
