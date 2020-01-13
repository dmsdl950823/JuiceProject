import React, { Component } from 'react';
import './../excss.css';
import './../Css/DivSect.css';
import cart from './../images/cart_03.png'

class Imagesect extends Component {
  render() {
      return (
          <section className="sect red cf">
              <LeftInformations />
              <RightInfo />
          </section>
      )
    }
}


  // right info
  class RightInfo extends Component {
    render() {
      return (
        <div className="rightInfo flt_left">
          <div className="currentPage cf">
            <ul className="cf">
              <li>1</li>
              <li>2</li>
              <li className="on">3</li>
            </ul>
          </div>
          
          <div className="socialM cf">
            <ul className="cf">
              <li>
                <a href="/">
                  <span className="_skip">instagram</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="_skip">Call</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }


// left info
class LeftInformations extends Component {
  // _login_Cart() {
  //   const selection = ['Sign in', 'Cart'];
  //   const selectionObj = [];
    
  //   for ( const n in selection) {
  //         `<p className="ractBox">
  //           <a href="/">
  //           <span className="_skip">{selection[name]}</span>
  //           </a>
  //         </p>`

  //     return(
  //       selectionObj
  //       )
  //     }
  // }


    render() {
      return (
          <div className="leftContents flt_left cf">
            <article>
              <div className="cf">
                <div className="flt_left">
                  {/* {this._login_Cart()} */}
                  <p className="ractBox">
                    <a href="/" className="Acc">
                    <span className="_skip">Sign in</span>
                    </a>
                  </p>
                  <p className="ractBox">
                    <a href="/" className="Cart">    {/* 수정필요 */}
                    <span className="_skip">Cart</span>
                    </a>
                  </p>
                </div>
                <div className="flt_left">
                  <p className="membership"><a href="/">MemberShip</a></p>
                </div>
              </div>
              <div className="cf">
                <p className="ractBox flt_left"></p>
                <p className="ractBox flt_left">
                  <a href="/" className="Buybtn">Buy Now</a>
                </p>
                <p className="viewMore flt_left"><a href="/">View More</a></p>
              </div>
            </article>

            <article>
              <p className="explnationWrap">
                <p className="explnation">A course program that organizes all the cleanser programs of Mercy Juice, which are specialized in excellent cleansing effects and balanced nutritional supply, in a step-by-step manner to achieve a more balanced and effective process.</p>
              </p>
              <h3>TOTAL CLEANSER 3DAYS</h3>
            </article>
          </div>
      )
    }

    
  }




  export default Imagesect;