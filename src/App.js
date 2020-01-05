import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './Contents/Wrapper';


class App extends React.Component {
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
      <a href="#">Go to Main Menu</a>
      <a href="#">Go to Products</a>
    </div>
  )
}


// default  --- erase
// function defaultApp() {
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

export default App;
