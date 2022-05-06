import React, { useState } from 'react';
import ItemList from './itemList';
import { numbers, operators, equals, clear, sin } from './numbers';
import './App.css';

const App = () => {
  const [answer, setAnswer] = useState();
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(oldCart => [...oldCart, item]);
  };

  const removeItem = (targetIndex) => {
    setCart(oldCart => oldCart.filter((item, index) => index !== targetIndex));
  }

  const doEquals = () => {
    setAnswer(eval(cart.join('')));
    setCart([eval(cart.join(''))]);
  }

  const doClear = () => {
    setCart([]);
    setAnswer([]);
  }

  return (
    <div>
      <h1>Basic Calculator Web App</h1>
      <h1 className="answer">{answer}</h1>
      <ul className="preMath">
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="buttons">
        <div className="numbers">
          <ItemList items={numbers} onItemClick={addItem} />
        </div>
        <div className="operators">
          <ItemList items={operators} onItemClick={addItem} />
        </div>
      </div>
      <ItemList items={equals} onItemClick={doEquals} />
      <ItemList items={clear} onItemClick={doClear} />
    </div>
  )
}

export default App;
