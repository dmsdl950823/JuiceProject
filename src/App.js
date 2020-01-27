import React, { Component } from 'react';
import FooterSect from './Contents/Footer';
import Header from './Contents/Header';
import Product from './Contents/Product';
import Imagesect from './Contents/DivSect';

import SassComponent from './SassComponent';
import './Css/Background.css';
import './index.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Background />
        <Skipmenu />
        <Wrapper />
        　{/* <SassComponent /> */}
      </div>
    );
  }
}

// skip menu
function Skipmenu() {
  return (
    <div id="skipmenu">
      <a href="/">Go to Main Menu</a>
      <a href="/">Go to Products</a>
    </div>
  );
}

class Wrapper extends React.Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Imagesect adImg="header" />
      </div>
    );
  }
}

function Background() {
  return (
    <div className="backgroundWrapper">
      <ul className="backgroundColor cf">
        <li className="back1 ">
          <i></i>
          <span></span>
        </li>
        <li className="back2 on">
          <i></i>
          <span></span>
        </li>
        <li className="back3 ">
          <i></i>
          <span></span>
        </li>
      </ul>
    </div>
  );
}
