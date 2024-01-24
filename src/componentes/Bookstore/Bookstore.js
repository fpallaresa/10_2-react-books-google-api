import React from "react";
import { useDebounce } from 'use-debounce';
import './Bookstore.css'
import BookTable from '../BookTable/BookTable';

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const Bookstore = () => {

    const [bookList, setBookList] = React.useState({ items: [] });
    const [wordData, setWordData] = React.useState("");
    const [wordDataDelay] = useDebounce(wordData, 1000);

    React.useEffect(() => {
        if (wordData.trim().length < 3) {
            setBookList({ items: [] });
            return;
        }

        fetch(API_URL + wordData)
            .then((response) => response.json())
            .then((data) => {
                const items = data.items || [];
                setBookList({ items });
            });

    }, [wordDataDelay]);

    return (
        <div className="book-list">
            <input type="text" value={wordData} onChange={(event) => setWordData(event.target.value)} />

            {wordData.trim().length < 3 
                ? (<p>Introduce más de 3 caracteres para buscar</p>) 
                : (bookList.items.length === 0
                    ? <p>Parece que no hay resultados</p>
                    : <BookTable bookList={bookList} />
                )}
        </div>
    );
}

export default Bookstore;