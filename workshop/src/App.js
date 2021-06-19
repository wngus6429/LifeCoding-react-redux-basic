/** @format */

import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from "./containers/Control";
import CreateContainer from "./containers/Create";
import UpdateContainer from "./containers/Update";
import { connect } from "react-redux";
//Container는 데이터를 주고 받고 알고리즘을 적음
//Component는 화면과 input 상자를 만듬

class App extends Component {
  render() {
    var article = null;
    if (this.props.mode === "READ") {
      article = <ReadContainer />;
    } else if (this.props.mode === "WELCOME") {
      article = <ReadContainer />;
    } else if (this.props.mode === "CREATE") {
      article = <CreateContainer />;
    } else if (this.props.mode === "UPDATE") {
      article = <UpdateContainer />;
    }
    return (
      <div className="App">
        <Header />
        <NavContainer />
        <ControlContainer />
        {article}
      </div>
    );
  }
}
//위에 this.props.mode를 받기 위해 이렇게함
export default connect(function (state) {
  return { mode: state.mode }; //이 부분이 값을 받는거임
})(App);
//이렇게 한 이유는 우리가 앱 내에서 리덕스의 state를 알필요가 있음
//그래서 App이라는 컴포넌트가 실행될때 props의 값으로 자신의 애플리케이션의 모드값을
//받는 props를 여기다가 추가하는 거임.
