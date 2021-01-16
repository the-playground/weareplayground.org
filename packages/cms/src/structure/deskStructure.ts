import S from '@sanity/desk-tool/structure-builder';
import { Layout, Radio, Settings, Zap } from 'react-feather';

import { configListItems, configDocumentFilterList } from './configListItems';
import { blogListItems, blogDocumentFilterList } from './blogListItems';
import {
    theatreListItems,
    theatreDocumentFilterList,
} from './theatreListItems';

import { pageListItems, pageDocumentFilterList } from './pageListItems';

const filterList = [
    configDocumentFilterList,
    blogDocumentFilterList,
    theatreDocumentFilterList,
    pageDocumentFilterList,
].flat();

export default () =>
    S.list()
        .title('Content Root')
        .items([
            // All global configs
            S.listItem()
                .title('Configs')
                .icon(Settings)
                .child(
                    S.list()
                        .title('Configs')
                        .items(configListItems)
                        .showIcons(false)
                ),
            S.divider(),
            // All blog-related documents
            S.listItem()
                .title('Blog')
                .icon(Radio)
                .child(
                    S.list()
                        .title('Blog')
                        .items([
                            S.documentTypeListItem('author'),
                            S.documentTypeListItem('post'),
                        ])
                ),
            // All theatre-related documents
            S.listItem()
                .title('Theatre')
                .icon(Zap)
                .child(
                    S.list()
                        .title('Theatre')
                        .items([
                            S.documentTypeListItem('show'),
                            S.documentTypeListItem('season'),
                            S.divider(),
                            S.documentTypeListItem('artist'),
                            S.documentTypeListItem('location'),
                            S.documentTypeListItem('organization'),
                        ])
                ),
            // All single page documents

            S.listItem()
                .title('Pages')
                .icon(Layout)
                .child(S.list().title('Pages').items(pageListItems)),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem: any) => !filterList.includes(listItem.getId())
            ),
        ]);
