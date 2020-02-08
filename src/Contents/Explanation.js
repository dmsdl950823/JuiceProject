import React, { Component } from 'react';
import { HelpBlock } from 'react-bootstrap';
import anime from 'animejs/lib/anime.es.js';

export default class Explanation extends Component {
  state = {
    expl: [
      {
        text: (
          <span>
            A course program that organizes all the cleanser programs of Mercy
            Juice, which are specialized in excellent cleansing effects and
            balanced nutritional supply, in a step-by-step manner to achieve a
            more balanced and effective process.
          </span>
        ),
        tit1: <a href="/">TOTAL CLEANSER</a>,
        tit2: (
          <span style={{ textAlign: 'right' }}>
            <a href="/">3DAYS</a>
          </span>
        ),
      },
      {
        text: (
          <span>
            plant nectar, Cleanspaulder, <br />
            which will make a heavy day vibrant and light.
          </span>
        ),
        tit1: <a href="/">CLEANSE</a>,
        tit2: (
          <span style={{ paddingLeft: '110px' }}>
            <a href="/">POWDER</a>
          </span>
        ),
      },
      {
        text: (
          <span>
            A plant nectar, Cleanspaulder, <br />
            which will make a heavy day vibrant and light.
          </span>
        ),
        tit1: <a href="/">AFTER CLEANSE</a>,
        tit2: (
          <span style={{ paddingLeft: '155px' }}>
            <a href="/">SMOOTHIE</a>
          </span>
        ),
      },
    ],
  };

  render() {
    // console.log(this.props.currPage + ' expl');
    // console.log();
    this._animationTitle();
    return (
      <article>
        <p className="explnationWrap">
          <span className="explnation">
            {this.state.expl[this.props.currPage].text}
          </span>
        </p>
        <h3 className="productName">
          <p>{this.state.expl[this.props.currPage].tit1}</p>
          <p>{this.state.expl[this.props.currPage].tit2}</p>
        </h3>
      </article>
    );
  }

  _animationTitle() {
    const tit = document.querySelector('.productName');
    if (tit !== null) {
      anime({
        targets: '.productName',
        width: '100%',
      });
    }
  }
}
