import React, { Component } from 'react';
import Imagesect from './DivSect';
import './../excss.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header cf">
                    <div className="headerInner">
                        <div className="flt_left">
                            <h1 className="logo">Logo here</h1>
                        </div>
                        <Nav />
                    </div>
                </header>

                <Imagesect adImg='header'/>
            </div>
        )
    }
}




class Nav extends Component {
    render(){
        return (
            <nav id="nav" className="flt_right">
                <ul className="cf navMenu">
                    <li><a href="/">COMPANY</a></li>
                    <li><a href="/">MENU</a></li>
                    <li><a href="/">INFO</a></li>
                    <li><a href="/">MORE</a></li>
                </ul>
            </nav>
        )
    }
}



export default Header;