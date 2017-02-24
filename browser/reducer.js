export const initialState = {toDos: []};

export default function(state = initialState, action){

switch (action.type) {

		case 'ADD_TODO': 
		return Object.assign({}, state, {toDos: state.toDos.concat(action.toDo)});


		case 'REMOVE_TODO':
		return Object.assign({}, state, {toDos: state.toDos.filter(el => el.id !== action.toDoId)});

		default:
		return state;

	}
}
