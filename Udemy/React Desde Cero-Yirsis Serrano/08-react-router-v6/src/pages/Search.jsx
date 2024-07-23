import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Cambio: `param` a `q`
  const { q = '' } = queryString.parse(location.search);
  const [inputValue, setValue] = useState(q);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
  };

  // Cambio: corrección de `toLowerCase`
  const getCharacters = () => {
    if (inputValue.trim() !== '') {
      const value = inputValue.toLowerCase();
      const result = Characters.filter((character) =>
        character.name.toLowerCase().includes(value)
      );
      setCharacters(result);
      console.log('result', result);
    } else {
      setCharacters([]);
    }
  };

  // Cambio: uso de `q` en lugar de `param`
  useEffect(() => {
    getCharacters();
  }, [q]);

  return (
    <div className='container'>
      <h1
        className="card-header text-center mt-5"
        style={{
          backgroundColor: '#3fc',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        SEARCH
      </h1>
      <br />
      <div className='row'>
        <div className='col-3 text-center'>
          <br />
          <form onSubmit={handleSubmit}>
            <br />
            <input
              type="text"
              placeholder='character name'
              className='form-control'
              autoComplete='off'
              onChange={handleChange}
              value={inputValue}
            />
            <button className='form-control btn btn-info mt-3 w-100'>search</button>
          </form>
        </div>
      </div>
      {/* Cambio: clase condicional para ocultar */}
      <div className={`col-12 text-center ${characters.length > 0 ? '' : 'hide'}`}>
        <h2
          className="card-header text-center mt-5"
          style={{
            backgroundColor: '',
            color: '#000',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          RESULTS {characters.length}
        </h2>
        <div className='row'>
          {characters.map((character) => (
            <div key={character.id} className='col-12 col-md-6 col-lg-4 mb-3'>
              <Card {...character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
