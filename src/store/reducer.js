const defaultState = {
  tasks: [],
  addTaskSuccess: false
};

export default function reducer(state = defaultState, action) {
    
    switch (action.type) {
      case "INCREMENT": {
        return {
          ...state,
          count: state.count + 1
        };
      }
      case "DECREMENT": {
        return {
          ...state,
          count: state.count - 1
        };
      }
      case "GET_TASKS": {
        return {
          ...state,
          tasks: action.tasks
        };
      }
      case "ADD_TASK": {
        return {
          ...state,
          tasks: [...state.tasks, action.task], 
          addTaskSuccess: true
        };
      }
      case "ADDING_TASK": {
        return {
          ...state,
          addTaskSuccess: false
        };
      }

      default:
        return state;
    }
  }
  