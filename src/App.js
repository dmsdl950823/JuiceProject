import React, { Component } from 'react';
import FooterSect from './Contents/Footer';
import Header from './Contents/Header';
import Product from './Contents/Product';
import Imagesect from './Contents/DivSect';

import SassComponent from './SassComponent'
import './App.css';
import './Css/Background.css';


export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Background />
        <Skipmenu />
        <Wrapper />　
      
        {/* <SassComponent /> */}
      </div>
      
    )
  }
}

// skip menu
function Skipmenu()  {
  return (
    <div id="skipmenu">
      <a href="/">Go to Main Menu</a>
      <a href="/">Go to Products</a>
    </div>
  )
}

class Wrapper extends React.Component {
  render() {
    return (
        <div id="container">
            <Header />
            <Imagesect adImg='header'/>

            {/* <Product /> */}
            {/* <Imagesect adImg='footAd'/>
            <FooterSect /> */}
        </div>
    )
  }
}

function Background() {
  return (
    <div className="backgroundWraper">
      <ul className="backgroundColor cf">
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
      </ul>
    </div>
  )
}





            /* <Sections sect='header'/>
            <Sections sect='product'/>
            <Sections />
            <Sections sect='footer'/> */

// class Sections extends Component {
//   render() {
//       const contents = this.props.sect;
//       switch (contents){
//           case 'header':
//               return (
//                   <Header />
//               );
//           case 'product':
//               return(
//                   <Product />
//                   // <div></div>
//               );
//           case 'footer':
//               return (
//                   <Footer />
//               )
//           default:
//               return (
//                   <Imagesect />
//               )
//       }
//   }
// }

