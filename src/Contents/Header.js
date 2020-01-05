import React, { Component } from 'react';
import Imagesect from './Header.js';

class Header extends Component {
    render() {
        return (
            <section>
                <header>
                    <h1>Logo</h1>
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
            <nav>
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