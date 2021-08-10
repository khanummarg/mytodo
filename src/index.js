import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from './demo/Counter'
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

function reducer(state = { count: 0 }, action) {
  console.log('action', action)
  console.log("state", state);

  if(action.type === 'CHANGE_COUNT'){
    return {
      ...state,
      count: state.count + 1
    }
  }
  if(action.type === 'SEND_MESSAGE'){
    return {
      ...state,
      message: action.message
    }
  }
  return state;
}

const store = createStore(reducer);
console.log("store", store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
