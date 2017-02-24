export const addToDo = function (toDoObj) {
  return {
    type: 'ADD_TODO',
    toDo: [{toDo: toDoObj.toDo, id: toDoObj.toDoId}]
  };
};

export const removeToDo = function (toDoId) {
  return {
    type: 'REMOVE_TODO',
    toDoId: toDoId
  };
};