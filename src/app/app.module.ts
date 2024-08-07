import { collectionReducer } from './state/reducers/collection.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducers/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { booksReducer } from './state/reducers/books.reducer';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer, count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
