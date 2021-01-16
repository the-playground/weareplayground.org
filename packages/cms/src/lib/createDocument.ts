import { DOCUMENT_ACTIONS } from '../constants';
import {
    DocumentActions,
    CreatePageDocument,
    CreateConfigDocument,
    CreateDocumentCollection,
    CreateDocumentReturn,
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
    disabledActions = [],
    maxSlugLength = 50,
    fieldsets,
    fields,
}) => {
    const schema = {
        name,
        title,
        icon: () => icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fieldsets: fieldsets ? [...fieldsets] : [],
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
        seo: {
            hideDocument: false,
            publishedAt: new Date().toISOString(),
        },
        preview: {
            select: {
                title: 'title',
                subtitle: 'slug.current',
                media: 'seo.image',
            },
            prepare({ title, subtitle, media }: any) {
                return {
                    title,
                    subtitle: subtitle === 'home' ? '' : subtitle,
                    media,
                };
            },
        },
    };

    return { ID: name, TITLE: title, schema };
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
    disabledActions = [],
    disableSEO = false,
    fieldsets,
    fields,
    initialValue,
    preview,
    orderings,
}) => {
    const schema = {
        name,
        title,
        icon: () => icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fieldsets: fieldsets ? [...fieldsets] : [],
        fields: disableSEO
            ? [...fields]
            : [
                  ...fields,
                  {
                      name: 'seo',
                      title: 'SEO',
                      type: 'pageSEO',
                  },
              ],
        initialValue,
        preview,
        orderings,
    };

    return { ID: name, TITLE: title, schema };
};

/**
 *
 * @param name
 * @param title
 * @param icon
 * @param disableCreateDelete
 * @param fields
 */
export const createConfigDocument: CreateConfigDocument = ({
    name,
    title,
    icon,
    disabledActions = [],
    fields,
}) => {
    const schema = {
        name,
        title,
        icon: () => icon,
        type: 'document',
        __experimental_actions: getDocumentActions(disabledActions),
        fields: [...fields],
    };

    return { ID: name, TITLE: title, schema };
};

export const getCreatedDocumentMeta = (documents: CreateDocumentReturn[]) =>
    documents.map((schema) => [schema.ID, schema.TITLE]);

export const getCreatedDocumentIDs = (documents: CreateDocumentReturn[]) =>
    documents.map((schema) => schema.ID);
