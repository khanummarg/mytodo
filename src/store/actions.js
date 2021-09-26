import request from "../helper/request";

export function getTasks() {
    return (dispatch)=>{
  request("http://localhost:3001/task")
  .then((tasks) => {
    dispatch({ type: "GET_TASKS", tasks: tasks });
  });
}
}

export function addTask(newTask) {
  return (dispatch) => {
    dispatch({ type: "ADDING_TASK"});
    request("http://localhost:3001/task", "POST", newTask)
    .then((task) => {
      dispatch({ type: "ADD_TASK", task });
    });
  };
}
