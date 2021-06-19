/** @format */

import Control from "../components/Control";
import { connect } from "react-redux";

export default connect(null, 
    function(dispatch){
        return {onClick:(mode)=>{
            if(mode === "DELETE_PROCESS"){
                if(!window.confirm('Really?')){
                    return;
            }}
            dispatch({type:mode})
        }
    }
})(Control); 
        //컨테이너가 dispatch를 받을려면 첫괄호의 두번째에서 받아야함
