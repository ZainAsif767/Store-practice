import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Book } from "src/app/models/books.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBooksCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        return collection.map((id) => books.find((book) => book.id === id)!);
    }
);