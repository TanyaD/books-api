import React, { Component } from 'react';
import './App.css';

class SingleBook extends Component {
    render() {
        const books = this.props.books;
        const myBooks = books.map((item) => (
            <div key={item.book_uri}>
                {item.title} by {item.author}
            </div>))

        return (
            <div>{myBooks}</div>
        )
    }
}

export default SingleBook;
