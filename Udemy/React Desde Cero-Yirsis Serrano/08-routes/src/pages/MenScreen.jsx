import React from 'react'
import { Characters } from "../models/Characters";
import Card from '../components/Card';
const MenScreen = () => {

  const men = Characters.filter(x => x.type === 'm');

  return (
    <div className="container">
    <h1 className="text-center mb-4" style={{ color: '#0056b3', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                MEN LIST
            </h1>
    <div className="row">
      {men.map(man => (
        <div key={man.id} className="col-6 col-md-4 col-lg-3">
          <Card {...man} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default MenScreen
