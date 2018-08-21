import React from 'react';
import BookListItem from  './ebook_list_item';

const EbookList = (props) => {
    const BookList = props.books.map((book) => {
        return (
            <BookListItem book = {book} key={book.isbn} onBookSelect = {props.onBookSelect}/>
        )
    });

    return (
        // book list with loop
        <ul className="col-md-4 list-group">
            {BookList}
        </ul>
    );
    
}


export default EbookList;