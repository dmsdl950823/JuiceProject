import React, { Component } from 'react';

class Imagesect extends Component {
    render() {
      return (
          <section>
              <Big_Imagesect />
              <small_Imagesect />
          </section>
      )
    }
}


// Big image
class Big_Imagesect extends Component {
    render() {
      return (
          <div>
              이부분은 큰 이미지입니다.
          </div>
      )
    }
  }

  // small image + article
  class small_Imagesect extends Component {
    render() {
      return (
          <div>
              <article>lorem ipsum..</article>
              <div>디자인 요소입니다</div>      

              <div>작은 이미지입니다.</div>
          </div>
      )
    }
  }

  export default Imagesect;