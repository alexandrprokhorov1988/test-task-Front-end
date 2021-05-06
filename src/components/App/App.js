import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';

function App() {

  return (
    <div className="page">
      <header className="App-header">
      </header>
      <main className="content">
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="*">
            <Redirect to="/cart/shipping"/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
