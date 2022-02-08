import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./Store/store";

axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


