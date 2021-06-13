import React from 'react';
import { useConfigContext } from '@nerve/shared/context';
import { useOverlay } from '@nerve/shared/hooks';
import { getShareConfig } from '@nerve/shared/configs';
import { Link } from '@nerve/core/routing';
import {
    BodyText,
    Icon,
    List,
    ListItemAction,
    Modal,
    CloseOverlay,
    OutlineButton,
} from '@nerve/core/components';

export const SocialShareModal: React.FC<ISocialShare> = ({
    title = 'Share this with some friends',
    socialShareText,
    buttonText = 'Share',
    url,
}) => {
    const [isOpen, setIsOpen, toggle] = useOverlay();
    const {
        site: { facebookAppID },
    } = useConfigContext();

    const share = getShareConfig(url, socialShareText, facebookAppID);

    // Create reusable hook that takes a ref, copies a given text, and then updates the text in the reffed div on a timeout
    const handleCopyURL = () => navigator.clipboard.writeText(url);

    return (
        <>
            <OutlineButton
                size="s"
                onClick={toggle}
                color="tertiary"
                startIcon={<Icon name="Share" size="xs" />}
                animateOnClick
            >
                {buttonText}
            </OutlineButton>
            <Modal
                title="Social Share"
                containerSize="xxs"
                isOpen={isOpen}
                onCloseHandler={setIsOpen}
                header={<CloseOverlay onCloseHandler={setIsOpen} />}
            >
                <List
                    gutter="l"
                    headingSpacing="l"
                    itemSpacing="m"
                    heading={
                        <BodyText color="dark" size="l" weight="bold" as="h2">
                            {title}
                        </BodyText>
                    }
                >
                    {/* Handle social & email sharing */}
                    {share.map((item) => (
                        <ListItemAction key={item.text}>
                            <Link to={item.url}>
                                <Icon
                                    name={item.iconName}
                                    size="s"
                                    color="highlight"
                                />
                                <BodyText color="dark" size="m">
                                    {item.text}
                                </BodyText>
                            </Link>
                        </ListItemAction>
                    ))}

                    {/* Copy URL button */}
                    <ListItemAction key="Copy link">
                        <button onClick={handleCopyURL} type="button">
                            <Icon name="Copy" size="s" />
                            <BodyText color="dark" size="m">
                                Copy link
                            </BodyText>
                        </button>
                    </ListItemAction>
                </List>
            </Modal>
        </>
    );
};

export interface ISocialShare {
    url: string;
    title?: string;
    buttonText?: string;
    socialShareText: string;
}
