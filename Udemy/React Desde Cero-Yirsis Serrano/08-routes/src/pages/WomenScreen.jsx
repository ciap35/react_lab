import React from 'react'
import { Characters } from "../models/Characters";
import Card from '../components/Card';

const WomenScreen = () => {
    const women = Characters.filter(x => x.type === 'w');

    return (
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: '#0056b3', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                WOMEN LIST
            </h1>
      <div className="row">
        {women.map(woman => (
          <div key={woman.id} className="col-6 col-md-4 col-lg-3">
            <Card {...woman} />
          </div>
        ))}
      </div>
    </div>
    )
}

export default WomenScreen
