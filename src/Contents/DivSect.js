import React, { Component } from 'react';
// import $ from "jquery";

import './../excss.css';
import './../Css/DivSect.css';
import LeftInformations from './LeftInformations';
import RightInfo from './RightInfo';

class Imagesect extends Component {
  render() {
    // red
    return (
      <section className="sect red cf">
        <LeftInformations currPage="powder" />
        <RightInfo />
      </section>
    );
  }
}

export default Imagesect;
