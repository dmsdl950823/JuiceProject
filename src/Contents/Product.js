import React, { Component } from 'react';



class Products extends Component {
    render() {
      return (
          <section>
              <ProductsSmall />
              <ProductBig />
              <ProductsSmall />
          </section>
      )
    }
  }


class ProductBig extends Component {
    render() {
        return (
            <div>
                <div>큰 이미지</div>
            </div>
        )
    }
}

class ProductsSmall extends Component {
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