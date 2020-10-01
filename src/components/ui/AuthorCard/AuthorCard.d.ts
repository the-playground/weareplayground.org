import { Artist } from '@type/artist';

export type AuthorCardProps = Pick<
    Artist,
    'name' | 'bio' | 'headshot' | 'instagram'
>;
