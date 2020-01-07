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
                <div>big product</div>
            </div>
        )
    }
}

class ProductsSmall extends Component {
    render() {
        return (
            <div>
                <div>small product1</div>
                <div>small product2</div>
            </div>
        )
    }
}

export default Products