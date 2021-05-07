import React from 'react';
import './App.css';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';

function App() {
  const [orderComplete, setOrderComplete] = React.useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setOrderComplete(true);
    history.push('/cart');
  }

  return (
    <div className="page">
      <header className="App-header">
      </header>
      <main className="content">
        <Switch>
          <Route path="/cart">
              <Cart
                onSubmit={handleSubmit}
                orderComplete={orderComplete}
              />
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
