import React, { useState, useEffect } from 'react';
import Card from './Card';
import env from "react-dotenv";


const Cards = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const clientId = env.REACT_APP_UNSPLASH_CLIENT_ID;    

    const imgRequest = async (searchQuery) => {
        const searchEndpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&page=1&client_id=${clientId}`;
        const defaultEndpoint = `https://api.unsplash.com/photos?client_id=${clientId}`;
        
        const uri = searchQuery ? searchEndpoint : defaultEndpoint;
        
        const request = await fetch(uri);
        const response = await request.json();
        
        if (searchQuery) {
            setImages(response.results);
        } else {
            setImages(response);
        }
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
                    Search: <input 
                                type="text" 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                            />
                </label>
                <button type="submit">Search</button>
            </form>
            <div className="container">
                <div className="row justify-content-center">
                    {images.map((value) => (
                        <Card key={value.id} img={value} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cards;
