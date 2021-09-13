import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'; 
import { Provider } from "react-redux";
// import { store } from './store';
import "./index.scss";
import Container from "./components/container";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
