import S from '@sanity/desk-tool/structure-builder';

export const buildDocumentSingletonListItem = (title: string, id: string) =>
    S.listItem()
        .title(title)
        .child(S.editor().title(title).schemaType(id).documentId(id));
