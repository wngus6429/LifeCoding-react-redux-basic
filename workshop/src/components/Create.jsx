/** @format */

import React, { Component } from "react";

export default class Create extends Component {
  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault();
          this.props.onSubmit(e.target.title.value, e.target.desc.value); //메소드호출
          //여기서 title, desc는 밑에 input의 name이다.
        }}
      >
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea type="text" name="desc" placeholder="description" /></p>
        <p><input type="submit" /></p>
      </form>
    );
  }
}
