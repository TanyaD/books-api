import React, { Component } from 'react';
import './App.css';
import SingleBook from './SingleBook'

class BookList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            books:[]
        };
    }

    async componentDidMount() {
        const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;
        try {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`);
            const data = await response.json();
            this.setState({
                books: data.results.books
            });
        } catch (error) {
            console.log(error);
        }
    }

    displayList() {
        return this.state.books.map((item) => (
            <SingleBook key={item.book_uri} item={item} />
        ))
    }
    render() {
        return (
            <div className="App">
                <p>Booklist:</p>
                <ul>
                    {this.displayList()}
                </ul>
            </div>
        );
    }
}

export default BookList;
