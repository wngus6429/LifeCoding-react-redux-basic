/** @format */

import React, { Component } from "react";

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li><a href="create" onClick={(e)=>{e.preventDefault(); this.props.onClick("CREATE");}}>Create</a></li>
        <li><a href="update" onClick={(e)=>{e.preventDefault(); this.props.onClick("UPDATE");}}>Update</a></li>
        <li><button value="delete" onClick={()=>{this.props.onClick("DELETE_PROCESS");}}>Delete</button></li> 
      </ul> //DELETE는 create와 update처럼 특별한 페이지로 안 가기 때문에 DELETE_PROCESS로 함
    );
  }
}
