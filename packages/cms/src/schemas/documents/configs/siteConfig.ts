export const schema = {
    name: 'siteConfig',
    title: 'Site Config',
    type: 'document',
    icon: (): string => '',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'verificationGoogle',
            title: 'Google Verification',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'verificationBing',
            title: 'Bing Verification',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
