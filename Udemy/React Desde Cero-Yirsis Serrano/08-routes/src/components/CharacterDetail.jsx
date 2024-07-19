import React from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import { Characters } from '../models/Characters';

const CharacterDetail = () => {
    // Dynamic path for image
    const { characterId } = useParams();
    const character = Characters.find(char => char.id === characterId);
    const { id, name, type, description } = character;
    const imagePath = `../assets/${id}.png`;
    const history = useHistory();
    const handleGoBack = () => {
      history.goBack();
    };
    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '800px' }}>
                <h1 className="card-header text-center" style={{ backgroundColor: '#3fc', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    {name}
                </h1>
                <img src={imagePath} className="card-img-top img-fluid" alt={name} />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{name}</h5>
                    <p className="card-text" style={{ fontSize: '1.2rem' }}>{description}</p>
                    <p className="card-text">
                        <small className="text-muted">{type === 'm' ? 'Male' : 'Female'}</small>
                    </p>
                    {/* <Link className="btn btn-primary" to='/character/'>
                        GO BACK
                    </Link> */}
                      <button onClick={handleGoBack} className='btn btn-secondary'>
            Go Back
        </button>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
