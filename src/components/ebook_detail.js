import React from 'react';

const BookDetail = ({book}) => {
    if(!Object.keys(book).length) {
        return <h1>Select Book to see details...</h1>
    }

return (

    <div className="col-md-6 book-detail">
        <a href={book.website} target="_blank">{book.title}</a>
        <h5>{book.subtitle}</h5>
        <h5>Total Pages: {book.pages}</h5>
        <p>{book.description}</p>
    </div>
)
}

export default BookDetail;