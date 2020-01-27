import React, { Component } from 'react';
import './../Css/DivSect.css';

export default class ProductHeader extends Component {
  render() {
    const CleanseStyle = {
      paddingRight: '4.2em',
    };
    const PowderStyle = {
      paddingRight: '2.9em',
    };

    if (this.props.currPage === 'detox') {
      return (
        <h3 className="productName">
          <p>TOTAL CLEANSER </p>
          <p>3DAYS</p>
        </h3>
      );
    } else if (this.props.currPage === 'powder') {
      return (
        <h3 className="productName">
          <p style={CleanseStyle}>CLEANSE </p>
          <p style={PowderStyle}>POWDER</p>
        </h3>
      );
    } else {
      return (
        <h3 className="productName">
          <p>AFTER CLEANSE</p>
          <p>SMOOTHIE</p>
        </h3>
      );
    }
  }
}
