import React from 'react';
import './App.css';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header';
import locationIqApi from '../../utils/LocationIqApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {data} from "../../utils/data";

function App() {
  const [orderComplete, setOrderComplete] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cart, setCart] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    setCart(data);
  }, [data]);

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
        <Header
          cart={cart}
        />
        <main className="content">
          <Switch>
            <Route path="/cart">
              <Cart
                onSubmit={handleSubmit}
                orderComplete={orderComplete}
                onGeolocation={getCityFromGeolocation}
                onHandlePrint={handlePrint}
                cart={cart}
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
