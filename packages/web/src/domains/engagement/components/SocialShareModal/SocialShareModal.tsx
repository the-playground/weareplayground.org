import React from 'react';
import { useOverlay } from '@nerve/shared/hooks';
import {
    Icon,
    List,
    ListItem,
    Modal,
    OutlineButton,
} from '@nerve/core/components';

export const SocialShareModal: React.FC<ISocialShare> = ({
    buttonText = 'Share',
    url,
}) => {
    const [isOpen, setIsOpen, toggle] = useOverlay();

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
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                    <ListItem>Item</ListItem>
                </List>
            </Modal>
        </>
    );
};

export interface ISocialShare {
    url: string;
    buttonText?: string;
}
