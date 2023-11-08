import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductList from './store/productsList';
import "./store/style.css";

let products = ReactDOM.createRoot(document.getElementById("container"));

products.render(
  <>
    <ProductList/>
  </>
)
// let tr = document.getElementsByName("tr");
// console.log(tr);

