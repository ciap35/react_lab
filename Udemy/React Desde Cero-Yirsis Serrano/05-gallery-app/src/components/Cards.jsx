import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loading from './Loading';

//Styles
import '../stylesheets/cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import env from "react-dotenv";


const Cards = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);
    const clientId = env.REACT_APP_UNSPLASH_CLIENT_ID;

    const imgRequest = async (searchQuery) => {
        setLoading(true);
        const searchEndpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&page=1&client_id=${clientId}`;
        const defaultEndpoint = `https://api.unsplash.com/photos?client_id=${clientId}`;

        const uri = searchQuery ? searchEndpoint : defaultEndpoint;

        const request = await fetch(uri);
        const response = await request.json();

        setImages(response.results || response);
        setLoading(false);
    };

    useEffect(() => {
        imgRequest(searchInput);
    }, [searchInput]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(input);
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search input..."
                        style={inputStyles}
                    />
                </label>
                <button type="submit" style={buttonStyles}>   <FontAwesomeIcon icon={faSearch} /></button>
            </form>
            {loading ? <Loading /> : (
                <div className="container">
                    <div className="row justify-content-center">
                        {images.map((value) => (
                            <Card key={value.id} img={value} />
                        ))}
                    </div>
                </div>)}
        </>
    );
};



const inputStyles = {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
    width: '200px',
};

const buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
};

export default Cards;
