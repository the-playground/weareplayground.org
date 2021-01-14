import { DOCUMENT_ACTIONS } from '../constants';
import {
    DocumentActions,
    CreatePageDocument,
    CreateConfigDocument,
    CreateDocumentCollection,
} from '../types';

/**
 *
 * @param disabledActions
 */
const getDocumentActions = (
    disabledActions: Partial<DocumentActions>
): Partial<DocumentActions> => {
    return DOCUMENT_ACTIONS.filter(
        (action) => !disabledActions.includes(action)
    );
};

/**
 *
 * @param name
 * @param title
 * @param icon
 * @param disableCreateDelete
 * @param fields
 */
export const createPageDocument: CreatePageDocument = ({
    name,
    title,
    icon,
    disabledActions,
    maxSlugLength = 200,
    fields,
}) => {
    const schema = {
        name,
        title,
        icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fields: [
            {
                name: 'title',
                title: 'Page Title',
                type: 'string',
                validation: (Rule: any) => Rule.required(),
            },
            {
                name: 'slug',
                title: 'Page Slug',
                type: 'slug',
                options: {
                    source: 'title',
                    slugify: (input: string): string =>
                        input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, maxSlugLength),
                },
                validation: (Rule: any) => Rule.required(),
            },
            ...fields,
            {
                name: 'seo',
                title: 'SEO',
                type: 'pageSEO',
            },
        ],
        preview: {
            select: {
                title: 'title',
                subtitle: 'slug',
                media: 'seo.image',
            },
        },
    };

    return {
        ID: name,
        TITLE: title,
        schema,
    };
};

/**
 *
 * @param name
 * @param title
 * @param icon
 * @param fields
 * @param preview
 */
export const createDocumentCollection: CreateDocumentCollection = ({
    name,
    title,
    icon,
    disabledActions,
    fields,
    preview,
}) => {
    const schema = {
        name,
        title,
        icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fields: [
            ...fields,
            {
                name: 'seo',
                title: 'SEO',
                type: 'pageSEO',
            },
        ],
        preview,
    };

    return {
        ID: name,
        TITLE: title,
        schema,
    };
};

/**
 *
 * @param name
 * @param title
 * @param icon
 * @param disableCreateDelete
 * @param fields
 */
export const createConfigDocument = (
    name: string,
    title: string,
    icon: JSX.Element,
    disabledActions: string[] = [],
    fields: unknown[]
) => {
    const schema = {
        name,
        title,
        icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fields: [...fields],
    };

    return {
        ID: name,
        TITLE: title,
        schema,
    };
};

const createImage = () => {};
