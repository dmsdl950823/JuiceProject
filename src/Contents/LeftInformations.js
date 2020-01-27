import React, { Component } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductHeader from './ProductHeader';
import Explanation from './Explanation';

// left info
export default class LeftInformations extends Component {
  render() {
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
            <Explanation currPage={this.props.currPage} />
          </p>
          <ProductHeader currPage={this.props.currPage} />
        </article>
      </div>
    );
  }
}
