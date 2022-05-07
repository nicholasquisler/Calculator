import React, { useState } from 'react';
import ItemList from './itemList';
import { numbers, operators, equals, clear } from './numbers';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(oldCart => [...oldCart, item]);
  };

  const removeItem = (targetIndex) => {
    setCart(oldCart => oldCart.filter((item, index) => index !== targetIndex));
  }

  const doEquals = () => {
    setCart([eval(cart.join(''))]);
  }

  const doClear = () => {
    setCart([]);
  }

  return (
    <div className='total'>
      <h1>Basic Calculator Web App</h1>
      <div className="calculator">
        <div className="buttons">
          <div className="numbers">
            <ul className="preMath">
              {cart.map((item, index) => (
                <li onClick={() => removeItem(index)} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <ItemList items={numbers} onItemClick={addItem} />
            <h2>By Nicholas Quisler</h2>
          </div>
          <div className="operators">
            <ItemList items={clear} onItemClick={doClear} />
            <p className="gap"></p>
            <ItemList items={operators} onItemClick={addItem} />
            <p className="gap"></p>
            <ItemList items={equals} onItemClick={doEquals} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
