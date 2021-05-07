import {API_KEY, BASE_URL_API} from "./config";

class LocationIqApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  getCityFromCoords(latitude, longitude) {
    return fetch(`${this._baseUrl}key=${this._apiKey}&lat=${latitude}&lon=${longitude}&format=json`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }
}

const locationIqApi = new LocationIqApi({
  baseUrl: BASE_URL_API,
  apiKey: API_KEY,
});

export default locationIqApi;

