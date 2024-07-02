import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ img }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                    <img 
                        className="card-img-top" 
                        src={img.urls.regular} 
                        alt={img.alt_description} 
                        onClick={handleImageClick}
                    />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: '#343a40' }}>{img.description || 'No description available.'}</h5>
                        <p className="card-text" style={{ color: '#6c757d' }}>{img.alt_description}</p>
                        <a
                            className="btn btn-primary"
                            href={img.urls.full}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className={`modal ${isModalOpen ? 'open' : ''} container align-middle`} onClick={handleCloseModal}>
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <img className="modal-content" src={img.urls.full} alt={img.alt_description} />
                </div>
            )}
        </>
    );
};

Card.propTypes = {
    img: PropTypes.object.isRequired
};

export default Card;
