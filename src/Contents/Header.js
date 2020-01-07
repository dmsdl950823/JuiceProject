import React, { Component } from 'react';
import Imagesect from './DivSect';
import './../excss.css';

class Header extends Component {
    render() {
        return (
            <section>
                <header className="red">
                    <h1>Logo here</h1>
                    <Nav />
                </header>
                
                <Imagesect />
            </section>
        )
    }
}


class Nav extends Component {
    render(){
        return (
            <nav className="blue">
                <ul>
                    <li>COMPANY</li>
                    <li>MENU</li>
                    <li>INFO</li>
                    <li>MORE</li>
                </ul>
            </nav>
        )
    }
}



export default Header;