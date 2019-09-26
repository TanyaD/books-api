import React from 'react';
import './App.css';

const SingleBook = ({ item }) => (
    <li>
        <p>{item.title} by {item.author}</p>
    </li>
)

export default SingleBook;
