import React from 'react';

const BookListItem = ({book, onBookSelect}) => {
    return (
        <li className="list-group-item book-list-item" onClick= {() => onBookSelect(book)}>
            {book.title}
        </li>
    )
}

export default BookListItem;