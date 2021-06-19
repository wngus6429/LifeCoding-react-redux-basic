/** @format */

import React, { Component } from "react";

export default class Update extends Component {
  state = { id: this.props.id, title: this.props.title, desc: this.props.desc };
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //이거 안하면 내용 변경이 안됨
  };
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(Number(e.target.id.value), e.target.title.value, e.target.desc.value); //메소드호출
        }} //여기서 title, desc는 밑에 input의 name이다.
      >
        <input type="hidden" name="id" value={this.state.id}></input>
        <p>
          <input
            type="text"
            name="title"
            onChange={this.onChangeHandler}
            placeholder="title"
            value={this.state.title}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="desc"
            onChange={this.onChangeHandler}
            placeholder="description"
            value={this.state.desc}
          />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}
