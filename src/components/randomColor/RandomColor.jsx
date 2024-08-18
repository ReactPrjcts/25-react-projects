import {useState} from "react";

const values = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
// background-color: rgb(0, 0, 0);
export default function RandomColor() {
  const [color, setColor] = useState(generateRandomColor());
  const [type, setType] = useState('HEX');
  function getRandomIndex(){
    return Math.floor(Math.random() * values.length);
  }
  function getRandomNumber(){
    return Math.floor(Math.random() * 256);
  }
  function generateRandomColor(type) {
    if(type === 'HEX'){
      let randomColor = '#';
      for (let i = 0; i < 6; i++) {
        randomColor += values[getRandomIndex()];
      }
      return randomColor;
    } else{
      let randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
      return randomColor;
    }
  }
  return (
    <div className="randomColor" style={{backgroundColor: color}}>
      <div>
        <button onClick={() => setType('HEX')}>Create HEX Color</button>
        <button onClick={() => setType('RGB')}>Create RGB Color</button>
        <button onClick={() => setColor(generateRandomColor(type))}>Generate Random Color</button>
      </div>
      <h2>HEX Color</h2>
      <h1>{color}</h1>
    </div>
  )
}