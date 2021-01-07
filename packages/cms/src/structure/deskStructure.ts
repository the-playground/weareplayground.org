import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Configs')
                .child(
                    S.list()
                        .title('Configs')
                        .items([
                            S.document()
                                .schemaType('companyConfig')
                                .documentId('companyConfig'),
                        ])
                ),
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem: any) => !['companyConfig'].includes(listItem.getId())
            ),
        ]);
