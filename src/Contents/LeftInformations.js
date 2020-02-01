import React, { Component } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductHeader from './ProductHeader';
import Explanation from './Explanation';

// left info
export default class LeftInformations extends Component {
  state = {
    status: this.props.explanation.id,
    buttonColors: [
      {
        topBigBox: '#80a29c',
        topsmallBox: '#a3c4be',
        BottBigBox: '#4c675c',
        BottsmallBox: '#283f36',
      },
      {
        topBigBox: '#91ae5b',
        topsmallBox: '#bbd275',
        BottBigBox: '#71ab67',
        BottsmallBox: '#315d22',
      },
      {
        topBigBox: '#86a6db',
        topsmallBox: '#2658ac',
        BottBigBox: '#486ca9',
        BottsmallBox: '#193b74',
      },
    ],
  };

  render() {
    this._changeColor(this.props.idx);

    return (
      <div className="leftContents flt_left cf">
        <article>
          <div className="cf">
            <div className="flt_left">
              <p className="ractBox">
                <a href="/" className="Acc hovBtn">
                  <span className="button_hover"></span>
                  <FontAwesomeIcon icon={faUser} />
                  <span className="_skip">Sign in</span>
                </a>
              </p>
              <p className="ractBox">
                <a href="/" className="Cart hovBtn">
                  <span className="button_hover"></span>
                  <span className="_skip">Cart</span>
                </a>
              </p>
            </div>
            <div className="flt_left">
              <p className="membership">
                <a href="/" className="hovBtn">
                  <span className="button_hover"></span>
                  MemberShip
                </a>
              </p>
            </div>
          </div>
          <div className="cf">
            <p className="ractBox flt_left"></p>
            <p className="ractBox flt_left">
              <a href="/" className="Buybtn hovBtn">
                <span className="button_hover"></span>
                Buy Now
              </a>
            </p>
            <p className="viewMore flt_left">
              <a href="/" className="hovBtn">
                <span className="button_hover"></span>
                View More
              </a>
            </p>
          </div>
        </article>

        <article>
          <p className="explnationWrap">
            <span className="explnation">
              A course program that organizes all the cleanser programs of Mercy
              Juice, which are specialized in excellent cleansing effects and
              balanced nutritional supply, in a step-by-step manner to achieve a
              more balanced and effective process.
            </span>
            {/* <Explanation currPage={this.props.explanation.id} /> */}
          </p>
          <h3 className="productName">
            <p>TOTAL CLEANSER </p>
            <p>3DAYS</p>
          </h3>
          {/* <ProductHeader currPage={this.props.explanation.id} /> */}
        </article>
      </div>
    );
  }

  _changeColor() {
    const topBigBox = document.querySelector(
      '.leftContents article > div:first-child',
    );
    const topsmallBox = document.querySelector('.Cart');
    const BottBigBox = document.querySelector(
      '.leftContents article > div:last-child',
    );
    const BottsmallBox = document.querySelector('.Buybtn');

    const idx = this.props.idx;
    const btnColor = this.state.buttonColors;

    if (
      topBigBox === null ||
      topsmallBox === null ||
      BottBigBox === null ||
      BottsmallBox === null
    ) {
      // topBigBox.style.backgroundColor = btnColor[idx].topBigBox;
      // topsmallBox.style.backgroundColor = btnColor[idx].topsmallBox;
      // BottBigBox.style.backgroundColor = btnColor[idx].BottBigBox;
      // BottsmallBox.style.backgroundColor = btnColor[idx].BottsmallBox;
    } else {
      console.log((topBigBox.style.backgroundColor = btnColor[idx].topBigBox));
      console.log(
        (topsmallBox.style.backgroundColor = btnColor[idx].topsmallBox),
      );
      console.log(
        (BottBigBox.style.backgroundColor = btnColor[idx].BottBigBox),
      );
      console.log(
        (BottsmallBox.style.backgroundColor = btnColor[idx].BottsmallBox),
      );
    }
  }
}
