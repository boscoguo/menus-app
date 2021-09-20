import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import reportWebVitals from "./reportWebVitals";
import Provider from "./components/provider/Provider";
import 'antd/dist/antd.css'; 
import "./index.scss";


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
