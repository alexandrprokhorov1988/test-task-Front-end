import React from 'react';
import './App.css';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import locationIqApi from '../../utils/LocationIqApi';

function App() {
  const [orderComplete, setOrderComplete] = React.useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setOrderComplete(true);
    history.push('/cart');
  }

  function getCoords() {
    if (navigator.geolocation) {
      return new Promise(function (resolve, reject) {
          const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        }
      )
    }
    return Promise.reject('Браузер не поддерживает геолокацию');
  }

  function getCityFromGeolocation() {
    return new Promise(function (resolve) {
      resolve(getCoords()
        .then((res) => {
          return locationIqApi.getCityFromCoords(res.coords.latitude, res.coords.longitude);
        })
      )
    })
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
              onGeolocation={getCityFromGeolocation}
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
