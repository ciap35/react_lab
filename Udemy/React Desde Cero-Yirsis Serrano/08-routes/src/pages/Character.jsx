import React from 'react';
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const Character = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ color: '#0056b3', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                CHARACTERS
            </h1>
            <div className="row">
                {Characters.map(character => (
                    <div key={character.id} className="col-6 col-md-4 col-lg-3 mb-4">
                        <Card {...character} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Character;
