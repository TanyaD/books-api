import React, { Component } from 'react';
import './App.css';

class SingleBook extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const books = this.props.books;
        const myBooks = books.map((item) => (
            <div key={item.book_uri} item={item}>
                {item.title} by {item.author}
            </div>))

        return (
            <div>{myBooks}</div>
        )
    }
}

export default SingleBook;
