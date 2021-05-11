require('dotenv').config();

const BASE_URL_API = 'https://eu1.locationiq.com/v1/reverse.php?';

const API_KEY =  process.env.REACT_APP_API_KEY;

export {
  BASE_URL_API,
  API_KEY,
};
