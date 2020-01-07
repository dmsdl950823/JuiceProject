import React, { Component } from 'react';
import './../excss.css';

class Imagesect extends Component {
    render() {
      return (
          <section className="red">
              <BigImagesect />
              <SmallImagesect />
          </section>
      )
    }
}


  // small image + article
  class SmallImagesect extends Component {
    render() {
      return (
        <div>
            <article>lorem ipsum..</article>
            <div>디자인 요소입니다</div>      

            <div>small image part</div>
        </div>
      )
    }
  }


// Big image
class BigImagesect extends Component {
    render() {
      return (
          <div> big image part</div>
      )
    }
  }


  export default Imagesect;