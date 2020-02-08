import React, { Component } from 'react';
import Header from './Contents/Header';
// import Product from './Contents/Product';
import DivSect from './Contents/DivSect';
import anime from 'animejs/lib/anime.es.js';

import './Css/Background.css';
import './index.css';
import './App.css';

export default class App extends Component {
  state = {
    index: 0,
  };
  render() {
    return (
      <div id="wrapper">
        <Background current={this.state.index} />
        <Skipmenu />
        <Wrapper current={this.state} />
      </div>
    );
  }

  componentDidMount() {
    const lists = document.querySelectorAll('.lists');
    let num = 0;

    setInterval(() => {
      // console.log(this.state.index);

      num += 1;

      this._removeClass(lists);
      lists[num].classList.add('on');

      this.setState({
        index: num,
      });

      if (num >= 2) {
        num = -1;
      }
    }, 8000);
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

class Wrapper extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <DivSect current={this.props.current} />
      </div>
    );
  }
}

class Background extends Component {
  render() {
    this._animation(this.props.current);
    return (
      <div className="backgroundWrapper">
        <ul className="backgroundColor cf">
          <li className="back0 on">
            <i></i>
            <span></span>
          </li>
          <li className="back1 ">
            <i></i>
            <span></span>
          </li>
          <li className="back2 ">
            <i></i>
            <span></span>
          </li>
        </ul>
      </div>
    );
  }

  _animation(crt) {
    console.log(crt);

    let backNum = '.back' + crt;
    let backOn = document.querySelector(backNum);

    const backImgs = document.querySelectorAll('.backgroundColor li');
    if (backImgs.length !== 0) {
      for (let i = 0; i < backImgs.length; i++) {
        console.log(backImgs[i].classList.remove('on'));
      }
    }

    if (backOn !== null) {
      console.log(document.querySelector(backNum).classList.add('on'));
    }
    anime({
      targets: '.css-selector-demo .el',
      translateX: 250,
    });
  }
}
