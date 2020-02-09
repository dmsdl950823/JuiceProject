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
        <ul className="backgroundColor">
          <li className="back0 on">
            <div className="back_division cf">
              <i></i>
              <span></span>
            </div>
          </li>
          <li className="back1 ">
            <div className="back_division cf">
              <i></i>
              <span></span>
            </div>
          </li>
          <li className="back2 ">
            <div className="back_division cf">
              <i></i>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  _animation(crt) {
    const backColor = ['#cce1e8', '#fbf9c0', '#a2bff0'];

    console.log(crt);
    let backNum = '.back' + crt;
    let backOn = document.querySelector(backNum);
    let backClass = '.back' + crt + '.on';
    const backImgs = document.querySelectorAll('.backgroundColor li');
    const lft_back = document.createElement('p');
    const lft_back_class = lft_back.classList.add('beforeBack');

    if (backImgs.length !== 0) {
      for (let i = 0; i < backImgs.length; i++) {
        backImgs[i].classList.remove('on');
        backImgs[i].firstChild.firstChild.style.width = '0';

        if (backImgs[i].childNodes.length >= 2) {
          console.log(backImgs[i].childNodes[1].remove());
          // console.log(backImgs[i].childNodes[1]);
        }
      }
    }

    if (backOn !== null) {
      backOn.classList.add('on');
      backOn.firstChild.firstChild.style.backgroundColor = backColor[crt];
      anime({
        targets: backClass + '.on i',
        width: '40%',
        duration: 1000,
        easing: 'easeInOutQuart',
      });

      if (backOn.classList[1] === 'on') {
        const insert_back = backOn.appendChild(lft_back);
        // backOn.insertBefore(insert_back, backOn.firstChild);
      }
    }
  }
}
