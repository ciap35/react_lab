import {useState} from 'react'
import InputNumber from './InputNumber';
import Result from './Result';

const Calculator = () => {
  const [number1, setNumber1] = useState(0.0);
  const [number2, setNumber2] = useState(0.0);
  const handleNumber1Change = (value) => {
    setNumber1(value);
  };

  const handleNumber2Change = (value) => {
    setNumber2(value);
  };

  const add = () => number1+ number2;
  const substract = () => number1 - number2;
  const multiply = () => number1 * number2;
  const divide = () => { if(number2 === 0){ return 'infinity';}else{ return number1/number2;} };
  


  return (
    <div>
      <label className='mx-2'>
        <InputNumber name="Number 1" onChange={handleNumber1Change}></InputNumber>
        </label>
        
        <label className='mx-2'>
        <InputNumber name="Number 2" onChange={handleNumber2Change}></InputNumber>
      </label><br/>
      <Result operation='Add' result={add()}></Result>
      <Result operation='Substract' result={substract()}></Result>
      <Result operation='Multiply' result={multiply()}></Result>
      <Result operation='Divide' result={divide()}></Result>
    </div>
  )
}

export default Calculator