import './App.css';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  } 
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }

  return (
    <div className="container">
      <div className="calc">
        <form action="">
          <div className="res">
            <input type="text" value={result} />
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <td><button onClick={clear}  id="clear" className="delete">C</button ></td>
              <td><button onClick={backspace}  id="delete" className="delete">DE</button ></td>
              <td><button name='/' onClick={handleClick}  className="operator">/</button ></td>
              <td><button name='*' onClick={handleClick}  className="operator">*</button ></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button name='7' onClick={handleClick}  className="number">7</button ></td>
              <td><button name='8' onClick={handleClick}  className="number">8</button ></td>
              <td><button name='9' onClick={handleClick}  className="number">9</button ></td>
              <td><button name='-' onClick={handleClick}  className="operator">-</button ></td>
            </tr>
            <tr>
              <td><button name='4' onClick={handleClick}  className="number">4</button ></td>
              <td><button name='5' onClick={handleClick}  className="number">5</button ></td>
              <td><button name='6' onClick={handleClick}  className="number">6</button ></td>
              <td><button name='+' onClick={handleClick}  className="operator">+</button ></td>
            </tr>
            <tr>
              <td><button name='1' onClick={handleClick}  className="number">1</button ></td>
              <td><button name='2' onClick={handleClick}  className="number">2</button ></td>
              <td><button name='3' onClick={handleClick}  className="number">3</button ></td>
              <td rowSpan="2"><button onClick={calculate}  className="equal">=</button ></td>
            </tr>
            <tr>
              <td colSpan="2"><button name='0' onClick={handleClick}  className="number zero">0</button ></td>
              <td><button name='.' onClick={handleClick}  className="number">.</button ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
