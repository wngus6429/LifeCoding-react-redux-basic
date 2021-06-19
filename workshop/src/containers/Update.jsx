/** @format */
import Update from "../components/Update";
import { connect } from "react-redux";

export default connect(
  function (state) {
    //애가 기존 title값과 desc값을 가져온다.
    var title, desc, id;
    for (var i = 0; i < state.contents.length; i++) {
      var d = state.contents[i];
      if (d.id === state.selected_content_id) {
        title = d.title;
        desc = d.desc;
        id = d.id;
        break;
        //title:title, desc:desc
      }
    }
    return { title, desc, id };
  }, //reducer의 state를 가져옴
  function (dispatch) {
    return {
      onSubmit: (id, title, desc) => {
        dispatch({ type: "UPDATE_PROCESS", id, title, desc }); //id:id, title:title, desc:desc
      },
    };
  } //dispatch함
)(Update);
