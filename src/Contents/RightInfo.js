import React, { Component } from 'react';

// right info
export default class RightInfo extends Component {
  render() {
    return (
      <div className="rightInfo flt_left">
        <div className="currentPage cf">
          <CurrentPageUl currList="currentList" />
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
    );
  }
}

class CurrentPageUl extends Component {
  render() {
    let i = 0;
    const currListArr = [];

    while (i < 3) {
      currListArr.push(
        <li key={i} onClick={this._newCom(i)}>
          {i}
        </li>,
      );
      i = i + 1;
    }

    return <ul className="cf">{currListArr}</ul>;
  }

  _newCom(i) {
    // 수정필요
    console.log(i);
  }
}
