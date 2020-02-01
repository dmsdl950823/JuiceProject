import React, { Component } from 'react';

export default class Explanation extends Component {
  render() {
    // console.log(this.props);
    if (this.props.currPage === 'detox') {
      return (
        <span className="explnation">
          A course program that organizes all the cleanser programs of Mercy
          Juice, which are specialized in excellent cleansing effects and
          balanced nutritional supply, in a step-by-step manner to achieve a
          more balanced and effective process.
        </span>
      );
    } else if (this.props.currPage === 'powder') {
      return (
        <span className="explnation">
          A plant nectar, Cleanspaulder, <br />
          which will make a heavy day vibrant and light.
        </span>
      );
    } else {
      return (
        <span className="explnation">
          A plant nectar, Cleanspaulder, <br />
          which will make a heavy day vibrant and light.
        </span>
      );
    }
  }
}
