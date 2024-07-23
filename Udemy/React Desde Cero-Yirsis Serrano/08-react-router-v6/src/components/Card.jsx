import React from 'react';
import {Link,useNavigate } from 'react-router-dom'

const Card = ({ id, name, description, type }) => {
  // Dynamic path for image
  const imagePath = `/assets/${id}.png`;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <div className='card m-3 col-6 col-md-4 col-lg-8'>
      <img src={imagePath} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        {/*<p className='card-text'>{description}</p>*/}
        {/*<p className='card-text'><small className='text-muted'>{type === 'm' ? 'Male' : 'Female'}</small></p>*/}
        <p className='card-text'>
          {/* <Link className="card-link" to={`/character/detail/${id}`}> */}
          <Link className="card-link" to={`/detail/${id}`}>
          View more [+]
          </Link> 
          
          </p>
      </div>
    </div>
  );
};

export default Card;
