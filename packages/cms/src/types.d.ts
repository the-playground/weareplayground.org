import { DOCUMENT_ACTIONS } from './constants';

// Get rid of types errors for desk builder
declare module '@sanity/desk-tool/structure-builder';

declare type DocumentActions = typeof DOCUMENT_ACTIONS;

interface Document {
    name: string;
    title: string;
    icon: JSX.Element | string;
    disabledActions: DocumentActions;
    fields: unknown[];
}

interface CreateDocumentReturn {
    ID: string;
    TITLE: string;
    schema: unknown;
}

interface PageDocument extends Document {
    maxSlugLength?: number;
}

interface DocumentCollection extends Document {
    preview?: unknown;
}

interface ConfigDocument extends Document {
    preview?: unknown;
}

export type CreateDocument<T> = (params: T) => CreateDocumentReturn;
export type CreatePageDocument = CreateDocument<PageDocument>;
export type CreateConfigDocument = CreateDocument<ConfigDocument>;
export type CreateDocumentCollection = CreateDocument<DocumentCollection>;
