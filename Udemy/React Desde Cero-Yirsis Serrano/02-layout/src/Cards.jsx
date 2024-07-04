import React from 'react';
import Card from './components/Card.jsx';
import data from './assets/cards.json'; // Importa el archivo JSON
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './assets/carousel.css';


const Cards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      };
/*    const data = [
        {
          "lang": "Python",
          "url": "https://cdn.svgporn.com/logos/python.svg",
          "fcolor": "#00c3ff",
          "scolor": "#ffff1c"
        },
        {
          "lang": "Java",
          "url": "https://cdn.svgporn.com/logos/java.svg",
          "fcolor": "#D31027",
          "scolor": "#EA384D"
        }
      ]*/

      return (
        <Slider {...settings}>
      
      {
        data.map(
          (
            {url,lang,fcolor,scolor}
          ) => 
              (
                <Card key={lang} lang={lang} logoUrl={url} fcolor={fcolor} scolor={scolor}/>
              )
        )
      }
    </Slider>
      );
};

export default Cards;