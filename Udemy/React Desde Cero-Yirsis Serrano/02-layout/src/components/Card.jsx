import React from 'react';
import '../assets/card.css';
import PropTypes from "prop-types";


const Card = ({lang,logoUrl,fcolor,scolor}) => {
 
    return (
      
        <div className="card" style={{background: `linear-gradient(to left, ${fcolor}, ${scolor})`}}>
            <img src={logoUrl} alt={lang}/>
            <h3>{lang}</h3>
        </div>
        
    );
};

Card.propTypes = {
    lang: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    fcolor: PropTypes.string.isRequired,
    scolor: PropTypes.string.isRequired
};


export default Card;