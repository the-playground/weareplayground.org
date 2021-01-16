import { buildPageDocumentListItem } from './helpers';
import { pageDocumentIDs } from '../buildDocuments';

export const pageListItems = pageDocumentIDs.map((documentID) =>
    buildPageDocumentListItem(documentID)
);

export const pageDocumentFilterList = pageDocumentIDs;
