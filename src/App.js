import React, { Component } from 'react';
import FooterSect from './Contents/Footer';
import Header from './Contents/Header';
import Product from './Contents/Product';
import Imagesect from './Contents/DivSect';

import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Skipmenu />
        <Wrapper />　
      
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
        <div id="wrapper">
            <div>background...</div>
            <Header />
            <Product />
            <Imagesect />
            <FooterSect />
        </div>
    )
  }
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














// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }


