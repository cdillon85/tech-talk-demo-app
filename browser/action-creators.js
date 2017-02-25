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

export const setRenderBoring = function () {
	return {
		type: 'SET_RENDER',
		renderType: 'boring'
	};
};

export const setRenderCool = function () {
	return {
		type: 'SET_RENDER',
		renderType: 'cool'
	};
};

export const setRenderCoolest = function () {
	return {
		type: 'SET_RENDER',
		renderType: 'coolest'
	};
};
