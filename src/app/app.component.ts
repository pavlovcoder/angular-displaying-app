import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite book is: {{myBook.title}}</h2>
    <p>Books:</p>
    <div>
      <p *ngFor="let book of books">
        ID: {{ book.id }}<br/>
        Title: {{ book.title }}<br/>
        Price: Ƀ{{ book.price }}<br/>
        Available: {{ book.available }}<br/>
        <button *ngIf="book.available !== 'none'">Buy</button>
      </p>
    </div>
    <p>All books = {{ books.length }}</p>
  `
})

export class AppComponent {
  title = 'The best books of 2017 year';
  books = [
    new Book(345623, 'Home Fire - Kamila Shemsey', 0.0059, 'none'),
    new Book(895245, 'What Happened - Hillary Clinton', 0.0056, 'available'),
    new Book(903333, 'The Book of Dust - Philip Pullman', 0.0062, 'available'),
    new Book(122122, 'The Future is History - Masha Gessen', 0.0057, 'none'),
    new Book(755324, 'The Leavers - Lisa Ko', 0.0034, 'available'),
    new Book(453245, 'Goodbye Vitamin - Rachel Khong', 0.0043, 'none')
  ];
  myBook = this.books[1];
}
