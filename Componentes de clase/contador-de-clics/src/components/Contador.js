import React from 'react';
import '../stylesheets/Contador.css';

class Contador extends React.Component {
  render(){
    return(
      <div>
          {this.props.numClics}
      </div>
    );
  }  
}
export default Contador;

/*function Contador({ numClics }){
    return (
      <div>
          {numClics}
      </div>
    );
}

export default Contador;*/