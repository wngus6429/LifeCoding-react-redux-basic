/** @format */

import Create from "../components/Create";
import { connect } from "react-redux";

export default connect(null, function (dispatch) {
  //기존 store에서 받아오는 내용이 없으니 첫번째는 null, create에서 값을 받아 오므로 2번째 인자 사용
  return {
    onSubmit: (title, desc) => {
      dispatch({ type: "CREATE_PROCESS", title, desc }); //title:title, desc:desc
    },
  };
})(Create);
//컨테이너가 dispatch를 받을려면 첫괄호의 두번째에서 받아야함
