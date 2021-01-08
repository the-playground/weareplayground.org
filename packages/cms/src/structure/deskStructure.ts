import S from '@sanity/desk-tool/structure-builder';
import { configListItems, configDocumentFilterList } from './configListItems';

const filterList = [configDocumentFilterList].flat();

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Configs')
                .child(S.list().title('Configs').items(configListItems)),
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem: any) => !filterList.includes(listItem.getId())
            ),
        ]);
