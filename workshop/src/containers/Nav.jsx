/** @format */

import Nav from "../components/Nav";
import { connect } from "react-redux";

export default connect(
    function(state){return {data:state.contents}}, 
    (dispatch)=>{return {onClick:(id)=>{dispatch({type:'READ', id:id})}}}
)(Nav); //component Nav로 배출함

