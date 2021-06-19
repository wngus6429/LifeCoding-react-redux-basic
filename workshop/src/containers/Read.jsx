/** @format */

import Read from "../components/Read";
import { connect } from "react-redux";

export default connect(function (state) {
  //리드는 store에 있는 내용만 받을 뿐이라 첫번째 인자
  //리드는 dispatch로 store에 보낼 정보가 없음 그렇기에 두번째 인자는 무시
  var title, desc;
  if (state.mode === "WELCOME") {
    title = state.welcome_content.title;
    desc = state.welcome_content.desc;
  } else {
    for (var i = 0; i < state.contents.length; i++) {
      var d = state.contents[i];
      if (d.id === state.selected_content_id) {
        title = d.title;
        desc = d.desc;
        break;
      }
    }
  }
  return { title: title, desc: desc };
})(Read); //뒤의 Article이 export 된다고
