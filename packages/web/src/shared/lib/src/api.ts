// eslint-disable-next-line import/no-named-default
import { default as sanityClientAPI } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = sanityClientAPI({
    projectId: '1zpkp3ji', // you can find this in sanity.json
    token:
        'skJd4Ljk1ROvaYadp2RtUTVKl8OsMlxHYLhCR4FcVs6EkOVli1wUclQBqmxRlO0c4kWk4s15d65PvkiH2f255tJGfvyNe82ZMt6trXFCFtHMcit22mtKHPOqVmJ7xlW4LhzNkVuQQIrBQMcS3Y9la3oM1SDlHAk7dCGMV83YM8GGH2B1fzTn',
    dataset: 'production', // or the name you chose in step 1
    useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
});

const sanityImageUrlBuilder = imageUrlBuilder(sanityClient);

export const imageURLFor = (source: string) => {
    return sanityImageUrlBuilder.image(source);
};
