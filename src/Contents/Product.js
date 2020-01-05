import React, { Component } from 'react';



class Products extends Component {
    render() {
      return (
          <section>
              <Products_small />
              <Product_big />
              <Products_small />
          </section>
      )
    }
  }


class Product_big extends Component {
    render() {
        return (
            <div>
                <div>큰 이미지</div>
            </div>
        )
    }
}

class Products_small extends Component {
    render() {
        return (
            <div>
                <div>이미지 1</div>
                <div>이미지 2</div>
            </div>
        )
    }
}

export default Products