import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap5/src/css/bootstrap.min.css'
import './index.css';
// import App from './App';
import Resturantnav from './component/01 Resturantnav';
// import Function_task from './component/Function_task';
// import Quantity_compo from './component/Quantity_compo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {<Resturantnav/>}
    {/* {<Function_task/>} */}
    {/* {<Quantity_compo/>} */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
