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
            >
                <List>
                    {share.map((item) => (
                        <ListItem>
                            <Link to={item.url}>
                                <Icon name={item.iconName} size="s" />
                                <BodyText color="dark" size="m">
                                    {item.text}
                                </BodyText>
                            </Link>
                        </ListItem>
                    ))}

                    {/* Copy URL button */}
                    <ListItem>
                        <button onClick={() => handleCopyURL} type="button">
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
