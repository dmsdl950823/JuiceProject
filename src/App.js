import React, { Component } from 'react';
import FooterSect from './Contents/Footer';
import Header from './Contents/Header';
import Product from './Contents/Product';
import DivSect from './Contents/DivSect';

import SassComponent from './SassComponent';
import './Css/Background.css';
import './index.css';
import './App.css';

export default class App extends React.Component {
  state = {
    index: 0,
  };
  render() {
    return (
      <div id="wrapper">
        <Background />
        <Skipmenu />
        <Wrapper current={this.state} />　{/* <SassComponent /> */}
      </div>
    );
  }

  componentDidMount() {
    const lists = document.querySelectorAll('.lists');
    let num = 0;

    setInterval(() => {
      console.log(this.state.index);

      num += 1;

      this._removeClass(lists);
      lists[num].classList.add('on');

      this.setState({
        index: num,
      });

      if (num >= 2) {
        num = -1;
      }
    }, 5000);
  }

  _removeClass(lists) {
    for (var i = 0; i < lists.length; i++) {
      lists[i].classList.remove('on');
    }
  }
}

// skip menu
function Skipmenu() {
  return (
    <div id="skipmenu">
      <a href="#nav">Go to Main Menu</a>
      <a href="/">Go to Products</a>
    </div>
  );
}

class Wrapper extends React.Component {
  render() {
    return (
      <div id="container">
        <Header />
        <DivSect current={this.props.current}/>
      </div>
    );
  }
}

function Background() {
  return (
    <div className="backgroundWrapper">
      <ul className="backgroundColor cf">
        <li className="back1 on">
          <i></i>
          <span></span>
        </li>
        <li className="back2 ">
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
