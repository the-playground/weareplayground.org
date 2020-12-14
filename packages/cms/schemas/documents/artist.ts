export const schema = {
    name: 'artist',
    title: 'Artists',
    type: 'document',
    icon: (): string => '🎨',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'lastName',
            title: 'Last name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
        },
        prepare({ firstName, lastName }) {
            return {
                title: `${firstName} ${lastName}`,
                subtitle: '',
            };
        },
    },
};
