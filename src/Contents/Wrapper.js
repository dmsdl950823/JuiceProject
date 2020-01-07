import React, { Component } from 'react';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import Imagesect from './DivSect';

class Wrapper extends React.Component {
    render() {
      return (
          <div id="wrapper">
              <div>background...</div>
              <Sections sect='header'/>
              <Sections sect='product'/>
              <Sections />
              <Sections sect='footer'/>
          </div>
      )
    }
  }

  class Sections extends Component {
    render() {
        const contents = this.props.sect;
        switch (contents){
            case 'header':
                return (
                    <Header />
                );
            case 'product':
                return(
                    <Product />
                    // <div></div>
                );
            case 'footer':
                return (
                    <Footer />
                )
            default:
                return (
                    <Imagesect />
                )
        }
    }
}

export default Wrapper;