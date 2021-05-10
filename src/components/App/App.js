import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';
import locationIqApi from '../../utils/LocationIqApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {cart as cartData, country} from "../../utils/data";

function App() {
  const [orderComplete, setOrderComplete] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cart, setCart] = React.useState([]);
  const [formValid, setFormValid] = React.useState({
    'shipping': false,
    'billing': false,
  });

  console.log(currentUser);

  React.useEffect(() => {
    setCart(cartData);
  }, [cartData]);

  function handleSubmitSingleForm(values) {
    setCurrentUser({ ...currentUser, ...values });
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

  function handleComplete() {
    setOrderComplete(true);
  }

  function handleSetValid(obj) {
    setFormValid({ ...formValid, ...obj });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          cart={cart}
        />
        <main className="content">
          <Switch>
            <Route path="/cart">
              <Cart
                onOrderComplete={handleComplete}
                orderComplete={orderComplete}
                onGeolocation={getCityFromGeolocation}
                onHandlePrint={handlePrint}
                cart={cart}
                data={country}
                onSingleFormSubmit={handleSubmitSingleForm}
                formValid={formValid}
                onHandleValid={handleSetValid}
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
