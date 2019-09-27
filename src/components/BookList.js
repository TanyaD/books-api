import React, { Component } from 'react';
import './App.css';
import SingleBook from './SingleBook'

class BookList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchQuery:''
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
 
    handleChange = (e) => {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({ [itemName]: itemValue})
    }

    render() {
        const dataFilter = item => item.title.toLowerCase().match(this.state.searchQuery.toLowerCase()) && true;
        const filteredBooks = this.state.books.filter(dataFilter);
        return (
            <div className="App">
                <p>Booklist:</p>
                <input type='text' name='searchQuery' value={this.state.searchQuery} placeholder='Search book by name' onChange={this.handleChange}/>
                <SingleBook books={filteredBooks}/>
            </div>
        );
    }
}

export default BookList;
