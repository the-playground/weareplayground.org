import S from '@sanity/desk-tool/structure-builder';
import { Layout } from 'react-feather';

export const buildConfigDocumentListItem = (title: string, id: string) =>
    S.listItem()
        .title(title)
        .child(S.editor().title(title).schemaType(id).documentId(id));

export const buildPageDocumentListItem = (id: string) =>
    S.documentListItem().id(id).schemaType(id).icon(Layout);
