import React from 'react';
import './App.css';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import locationIqApi from '../../utils/LocationIqApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {
  const [orderComplete, setOrderComplete] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: null
  });

  const history = useHistory();

  function handleSubmit(values) {
    setCurrentUser(values);
    setOrderComplete(true);
    history.push('/cart/print');
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

  function handlePrint() {
    window.print();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <header className="App-header">
        </header>
        <main className="content">
          <Switch>
            <Route path="/cart">
              <Cart
                onSubmit={handleSubmit}
                orderComplete={orderComplete}
                onGeolocation={getCityFromGeolocation}
                onHandlePrint={handlePrint}
              />
            </Route>
            <Route path="*">
              <Redirect to="/cart/shipping"/>
            </Route>
          </Switch>
        </main>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
