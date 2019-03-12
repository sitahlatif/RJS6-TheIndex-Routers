import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    const filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    const color = this.props.match.params.color;
    let books = this.state.filteredBooks;
    if (color) {
      books = books.filter(book => book.color === color);
    }
    return (
      <div>
        <h3>{color} Books</h3>
        <SearchBar onChange={this.filterBooks} />

        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
