import React from "react";
import './BookTable.css';

const BookTable = ({ bookList }) => {

    return (
        <table className="book-list__table">
            <thead>
                <tr>
                    <th>Autores</th>
                    <th>Título</th>
                    <th>Precio</th>
                    <th>Portada</th>
                </tr>
            </thead>
            <tbody>

                {bookList.items.map((book) => (
                    <tr key={book.id}>
                        <td>{book.volumeInfo?.authors?.join(", ") || "sin autores"}</td>
                        <td>{book.volumeInfo?.title || "sin título"}</td>
                        <td>
                            {book.saleInfo?.listPrice?.amount
                                ? `${book.saleInfo.listPrice.amount.toLocaleString("es-ES", { minimumFractionDigits: 2 })} €`
                                : "sin precio"
                            }
                        </td>
                        <td>
                            {book.volumeInfo?.imageLinks?.smallThumbnail
                                ? (<img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo?.title} />)
                                : ("sin imagen")}
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default BookTable;
