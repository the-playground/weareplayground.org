import { useState, ReactElement } from 'react';

/**
 * A handy simple little hook for working with dynamic content.
 * Example: Modals or drawers
 */
export const useDynamicContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<DynamicContent>(null);
    const [label, setLabel] = useState('');

    /**
     * Open the content if it is closed and vice-versa. If content is passed in,
     * it will set the content to be displayed.
     *
     * @param content A React element to display in the modal
     */
    const toggleContent = (
        dynamicContent: DynamicContent = content,
        dynamicLabel: string = label
    ) => {
        setIsOpen(!isOpen);
        if (label) {
            setLabel(dynamicLabel);
        }
        if (dynamicContent) {
            setContent(dynamicContent);
        }
    };

    return { isOpen, setIsOpen, content, label, toggleContent };
};

type DynamicContent = ReactElement | null;
export type UseDynamicContentReturn = ReturnType<typeof useDynamicContent>;
