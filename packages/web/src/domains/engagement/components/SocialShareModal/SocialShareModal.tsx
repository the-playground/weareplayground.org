import React from 'react';
import { useConfigContext } from '@nerve/shared/context';
import { useOverlay } from '@nerve/shared/hooks';
import { getShareConfig } from '@nerve/shared/configs';
import { Link } from '@nerve/core/routing';
import {
    BodyText,
    Icon,
    List,
    ListItem,
    Modal,
    CloseOverlay,
    OutlineButton,
} from '@nerve/core/components';

export const SocialShareModal: React.FC<ISocialShare> = ({
    shareText,
    buttonText = 'Share',
    url,
}) => {
    const [isOpen, setIsOpen, toggle] = useOverlay();
    const {
        site: { facebookAppID },
    } = useConfigContext();

    const share = getShareConfig(url, shareText, facebookAppID);

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
                            Share this show with some friends
                        </BodyText>
                    }
                >
                    {/* Handle social & email sharing */}
                    {share.map((item) => (
                        <ListItem key={item.text}>
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
                        </ListItem>
                    ))}

                    {/* Copy URL button */}
                    <ListItem key="Copy link">
                        <button onClick={handleCopyURL} type="button">
                            <Icon name="Copy" size="s" />
                            <BodyText color="dark" size="m">
                                Copy link
                            </BodyText>
                        </button>
                    </ListItem>
                </List>
            </Modal>
        </>
    );
};

export interface ISocialShare {
    url: string;
    buttonText?: string;
    shareText: string;
}
