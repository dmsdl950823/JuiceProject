import React, { Component } from 'react';
import './../Css/Footer.css'

class FooterSect extends Component {
    render() {
      return (
          <section className="sect">
              <MoreSect />
              <Footer />
          </section>
      )
    }
  }

class MoreSect extends Component {
    render() {
        return (
            <div className="cf newsImgWarp">
                <article className="flt_left">news1</article>
                <article className="flt_left">news2</article>
                <article className="flt_left">news3</article>
                <article className="flt_left">news4</article>
            </div>
        )
    }
}


class Footer extends Component {
    render() {
      return (
        <footer>
            <div className="footerUpper">footer contents1</div>
            <div className="footerBottom">footer contents2</div>
        </footer>
      )
    }
  }



export default FooterSect;