import { Author } from '@type/artist';

export type AuthorCardProps = Pick<
    Author,
    'name' | 'bio' | 'headshot' | 'instagram'
>;
