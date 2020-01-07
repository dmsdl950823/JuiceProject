import React, { Component } from 'react';


class FooterSect extends Component {
    render() {
      return (
          <div>
              <MoreSect />
              <Footer />
          </div>
      )
    }
  }

  
class Footer extends Component {
    render() {
      return (
        <footer>
            <div>발발</div>
            <div>발발</div>
        </footer>
      )
    }
  }

class MoreSect extends Component {
    render() {
        return (
            <div>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
            </div>
        )
    }
}

export default FooterSect;