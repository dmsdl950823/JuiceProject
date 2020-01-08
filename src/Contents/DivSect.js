import React, { Component } from 'react';
import './../excss.css';
import './../Css/DivSect.css';

class Imagesect extends Component {
  render() {
      if (this.props.adImg === 'header') {
        return (
            <section className="sect red cf">
                <BigImagesect />
                <SmallImagesect margin="left"/>
            </section>
        )
      } else {
        return (
          <section className="sect red cf">
              <SmallImagesect margin="right"/>
              <BigImagesect />
          </section>
      )
      }
    }
}


  // small image + article
  class SmallImagesect extends Component {
    render() {
      const marginStyle = this.props.margin;
      const newClassName = marginStyle + 'margin flt_left smallAdImageWrap'
  
      return (
        <div className={newClassName}>
            <article>lorem ipsum..</article> 
            <div>디자인 요소입니다</div>      

            <div className="smallAdImage">small image part</div>
        </div>
      )
    }
  }


// Big image
class BigImagesect extends Component {
    render() {
      return (
          <div className="bigAdImage flt_left"> big image part</div>
      )
    }
  }


  export default Imagesect;