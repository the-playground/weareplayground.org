import { AvailableIconName } from '@web/ui/core';

export const getShareConfig = (
    url: string,
    shareText: string,
    facebookAppID: string
): SocialShareConfig[] => {
    const encodedURL = encodeURIComponent(url);
    const text = encodeURIComponent(shareText);

    return [
        {
            text: 'Share on Facebook',
            url: `https://www.facebook.com/dialog/share?app_id=${facebookAppID}&display=popup&href=${encodedURL}&quote=${text}`,
            iconName: 'FacebookAlt',
        },
        {
            text: 'Share on Twitter',
            url: `https://twitter.com/intent/tweet?source=tweetbutton&text=${text}&url=${encodedURL}`,
            iconName: 'TwitterAlt',
        },
        {
            text: 'Share on LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
            iconName: 'LinkedInAlt',
        },
        {
            text: 'Share via Email',
            url: `mailto:yourcoolfriend@theiremail.com?subject=${text}&body=${encodedURL}`,
            iconName: 'Envelope',
        },
    ];
};

interface SocialShareConfig {
    text: string;
    url: string;
    iconName: AvailableIconName;
}
