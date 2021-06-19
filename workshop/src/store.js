/** @format */
import { createStore } from "redux"; //리덕스 스토어를 만든다

//초기치를 만든다.
var initState = {
  mode: "WELCOME",
  welcome_content: { title: "WEB", desc: "Hello, WEB" },
  selected_content_id: 1, //클릭 했을때 뭐 클릭 했는지 알기 위해
  max_content_id: 3,
  contents: [
    { id: 1, title: "HTML", desc: "HTML is ..." },
    { id: 2, title: "CSS", desc: "CSS is ..." },
    { id: 3, title: "JS", desc: "JS is ..." },
  ],
};

//reducer 가공 하는 새끼, 보내는 새끼를 만든다.
function reducer(state = initState, action) {
  if (action.type === "WELCOME") {
    return { ...state, mode: "WELCOME" }; //...은 이 state를 복제한 새로운 객체가 나옴
  }
  if (action.type === "READ") {
    return { ...state, mode: "READ", selected_content_id: action.id };
  }
  if (action.type === "CREATE") {
    return { ...state, mode: "CREATE" };
  }
  if (action.type === "CREATE_PROCESS") {
    var newId = state.max_content_id + 1;
    var newContents = [
      ...state.contents, //...으로 복제
      { id: newId, title: action.title, desc: action.desc },
    ];
    return {
      ...state,
      contents: newContents,
      max_content_id: newId,
      mode: "READ",
      selected_content_id: newId,
    };
    //create 되고나서 read로 만들고 현재 선택된것도 방금 생성한걸로
  }
  if (action.type === "UPDATE") {
    return { ...state, mode: "UPDATE" };
  }
  if (action.type === "UPDATE_PROCESS") {
    var newContentss = [...state.contents];
    for (var i = 0; i < newContentss.length; i++) {
      if (newContentss[i].id === action.id) {
        newContentss[i].title = action.title;
        newContentss[i].desc = action.desc;
      }
    }
    return { ...state, contents: newContentss, mode: "READ", selected_content_id: action.id };
    //create 되고나서 read로 만들고 현재 선택된것도 방금 생성한걸로
  }
  if (action.type === "DELETE_PROCESS") {
    var newContentsss = state.contents.filter((e) => {
      if (e.id === state.selected_content_id) {
        return false; //삭제할 애기에 false하고 그 외에 것들은 아래 return true
      }
      return true;
    });
    return { ...state, contents: newContentsss, mode: "WELCOME" }; //삭제로 하게되면 특정 페이지 read로 못가니 만만한 welcome
    //인자로들어온 콜백 펑션을 이 배열에 숫자만큼 실행시킴.
    //실행시킬때마다 인자로 그 순번에 해당되는 배열을 주입.
    //그 주입된 정보를 바탕으로해서 함수를 구현하는 사람이 리턴값을 false해주면
    //그 순번에 해당하는 값은 빼고 리턴값이 true면 그 순번에 해당되는 애는 추가해서 그 결과는
    //새로운 배열로 만들어준다
  }
  return state;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// function reducer(state, action) {
//     if (state === undefined) {
//       return initState; //초기치 설정
//     }
//   }
