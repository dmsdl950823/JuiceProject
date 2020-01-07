import React, { Component } from 'react';


class FooterSect extends Component {
    render() {
      return (
          <section className="red">
              <MoreSect />
              <Footer />
          </section>
      )
    }
  }

  
class Footer extends Component {
    render() {
      return (
        <footer>
            <div>footer contents</div>
            <div>footer contents</div>
        </footer>
      )
    }
  }

class MoreSect extends Component {
    render() {
        return (
            <div>
                <article>news1</article>
                <article>news2</article>
                <article>news3</article>
                <article>news4</article>
            </div>
        )
    }
}

export default FooterSect;