import React from 'react';

const Home = () => {
    const introPath = `/assets/`;
  return (
    <div className='container '>
        <div className='row mx-auto text-center'>
        <h1 className="text-center mb-4" style={{ color: '#0056b3', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                HOME
            </h1>
      <img src={`${introPath}intro.gif`}/>
      </div>
    </div>
  );
};

export default Home;
