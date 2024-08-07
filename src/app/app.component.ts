import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectBooks, selectBooksCollection } from './state/selectors/books.selectors';
import { GoogleBooksService } from './services/books.service';
import { BooksActions, BooksApiActions } from './state/actions/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private booksService: GoogleBooksService, private store: Store) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(
      (books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    )
  }

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBooksCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}
