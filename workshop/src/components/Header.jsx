/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <h1><a href="#welcome" onClick={() => {this.props.onClick();}}>
            WEB
        </a></h1>
        World wide Web
      </header>
    );
  }
}

//이 컴포넌트를 랩핑한 감싸는 가짜 컴포넌트를 export 시킬거임
//이를 위해 npm install react-redux를 함
//위에는 컴포넌트, 밑에는 redux와의 연결
//이 컴포넌트에서 일어난 콜백은 첫 ()의 2번째 인자로
export default connect(null, function (dispatch) {
  return {onClick: () => {dispatch({ type: "WELCOME"});},
  };
})(Header);
